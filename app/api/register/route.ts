import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import User from '@/lib/models/User';

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        const newUser = new User({
            name,
            email,
            password, // Hash the password in production
        });

        await newUser.save();

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
