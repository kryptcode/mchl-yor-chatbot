import { NextResponse } from 'next/server';

export async function POST(request) {
    const { message } = await request.json();

    // Replace 'http://your-flask-app-url/chat' with your deployed Flask app URL
    const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
}
