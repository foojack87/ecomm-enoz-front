import { mongooseConnect } from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import { User } from '@/models/User';

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    await mongooseConnect();

    // Create a new user document
    const newUser = new User({
      name,
      email,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    return NextResponse.json(savedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
