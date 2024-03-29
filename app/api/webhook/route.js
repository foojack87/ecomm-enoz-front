import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Orders';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  await mongooseConnect();
  const payload = await request.text();

  const sig = request.headers.get('stripe-signature');
  console.log('sig: ', sig);

  let event;

  const endpointSecret = process.env.STRIPE_SECRET_KEY;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
      }
      console.log(data);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response('payment confirmation route received', {
    status: 200,
  });
}
