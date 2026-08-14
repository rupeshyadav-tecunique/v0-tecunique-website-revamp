import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const jobTitle = formData.get('jobTitle') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    if (!jobTitle || !firstName || !lastName || !email || !phone || !coverLetter || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert resume file to buffer for Resend attachment
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const receivers = (
      process.env.HR_EMAIL_ADDRESS || 
      process.env.CONTACT_RECEIVER_EMAILS || 
      'rupesh.yadav@tecunique.com'
    ).split(',');

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM_ADDRESS || 'Careers <noreply@tecunique.com>',
      to: receivers,
      subject: `New Job Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Applicant Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>` : ''}
        
        <h3>Cover Letter:</h3>
        <div style="white-space: pre-wrap; padding: 15px; background: #f4f4f5; border-radius: 8px;">${coverLetter}</div>
        
        <p><em>The applicant's resume is attached to this email.</em></p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        }
      ]
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Apply API Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
