import { mongooseConnect } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { Product } from '@/models/Product';
import { Order } from '@/models/Orders';
import stripe from 'stripe';

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { name, email, city, postalCode, streetAddress, country, products } =
    await request.json();

  await mongooseConnect();

  const productIds = products.split(',');
  const uniqueIds = [...new Set(productIds)];
  const productsInfos = await Product.find({ _id: { $in: uniqueIds } });

  let line_items = [];

  for (const productId of uniqueIds) {
    const info = productsInfos.find((p) => p._id.toString() === productId);
    const quantity = productIds.filter((id) => id === productId).length || 0;

    if (quantity > 0 && info) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: info.title },
          unit_amount: info.price * 100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });
  const session = await stripeInstance.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart/success',
    cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    metadata: {
      orderId: orderDoc._id.toString(),
    },
  });

  return NextResponse.json({ url: session.url });
}
