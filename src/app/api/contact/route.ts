import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, product, capacity, useCase, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    // Log the received quote request
    console.log('=== NEW KANGAROO WATER QUOTE INQUIRY ===');
    console.log({
      name,
      phone,
      email: email || 'N/A',
      city: city || 'N/A',
      product: product || 'N/A',
      capacity: capacity || 'N/A',
      useCase: useCase || 'N/A',
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification to info@kangaroowater.in via Nodemailer / Resend / SendGrid / AWS SES
    /*
      Example integration stub:
      await transporter.sendMail({
        from: '"Kangaroo Web Inquiry" <no-reply@kangaroowater.in>',
        to: 'info@kangaroowater.in',
        subject: `New RO Plant Inquiry from ${name} (${city})`,
        text: `Customer Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nProduct: ${product}\nMessage: ${message}`,
      });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Your quotation request has been logged successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
