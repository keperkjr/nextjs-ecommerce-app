import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/utils/dbConnect'
import User from '@/models/user'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    await dbConnect();
    const body = await request.json();

    try {
        const user = await new User({
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }).save();

        console.log('user created', user);
        return NextResponse.json({
            status: 'success',
            user
        });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            status: 'error',
            error: String(error?.message || '')
        }, 
        {
            status: 500
        });
    }
}