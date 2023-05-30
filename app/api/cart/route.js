import { mongooseConnect } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { Product } from '@/models/Product';

export async function POST(request) {
  await mongooseConnect();

  const body = await request.json();
  const { ids } = body;

  const products = await Product.find({ _id: { $in: ids } }); // Use $in operator to match multiple ids

  return NextResponse.json(products);
}
