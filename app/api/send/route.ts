import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml, sanitizeHeader } from '@/lib/security';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Support both single "name" field and "firstName / lastName" fields
    const senderName = sanitizeHeader(
      body.name || 
      [body.firstName, body.lastName].filter(Boolean).join(' ') || 
      'Website Visitor'
    );
    const email = sanitizeHeader(body.email);
    const company = sanitizeHeader(body.company);
    const service = sanitizeHeader(body.service);
    const rawMessage = body.message || '';

    if (!email || !rawMessage) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const receivers = (
      process.env.CONTACT_RECEIVER_EMAILS || 
      'rupesh.yadav@tecunique.com'
    ).split(',').map(e => e.trim()).filter(Boolean);

    // Escape all user inputs before interpolating into HTML email
    const safeName = escapeHtml(senderName);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeService = escapeHtml(service || 'Not specified');
    const safeMessage = escapeHtml(rawMessage);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM_ADDRESS || 'Contact Form <noreply@tecunique.com>',
      to: receivers,
      replyTo: email,
      subject: `New Inquiry from ${senderName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #38bdf8;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Service:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeService}</td>
            </tr>
          </table>
          
          <h3 style="color: #0f172a; margin-top: 20px; margin-bottom: 8px;">Message:</h3>
          <div style="white-space: pre-wrap; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #334155; line-height: 1.6;">${safeMessage}</div>
          
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            Submitted via TECUNIQUE Website Contact Form · Direct reply is enabled
          </p>
        </div>
      `
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
