"use server"
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import { User } from '@/lib/models/User';
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
    const { name, email, password, phoneNumber} = await req.json();
    // Check if all fields are provided
    if (!name || !email || !password || !phoneNumber) {
        return NextResponse.json({ success: false, message: 'All fields are required' });
    }
    try {
        await connectToDatabase();
        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'Email already in use' });
        }
        const existingUserMobile = await User.findOne({ phoneNumber });
        if (existingUserMobile) {
            return NextResponse.json({ success: false, message: 'Phone no. already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            createdDate: new Date(),
            emailConfirmed: false,  // Set as false initially, to confirm after email verification
            loginCount: 0,
        });

        // Save the user to the database
        await newUser.save();

        return NextResponse.json({ success: true, message: 'User registered successfully!' });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: 'An error occurred during registration' });
    }
}
