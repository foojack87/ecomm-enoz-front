import { mongooseConnect } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { Product } from '@/models/Product';

export async function GET(request) {
  await mongooseConnect();

  const allProducts = await Product.find({}, null, { sort: { _id: -1 } });
  const products = JSON.parse(JSON.stringify(allProducts));

  return NextResponse.json(products);
}
