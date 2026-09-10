import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml, sanitizeHeader } from '@/lib/security';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const rawJobTitle = formData.get('jobTitle') as string;
    const rawFirstName = formData.get('firstName') as string;
    const rawLastName = formData.get('lastName') as string;
    const rawEmail = formData.get('email') as string;
    const rawPhone = formData.get('phone') as string;
    const rawLinkedin = formData.get('linkedin') as string;
    const rawCoverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    if (!rawJobTitle || !rawFirstName || !rawLastName || !rawEmail || !rawPhone || !rawCoverLetter || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Server-side email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(rawEmail.trim())) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Server-side phone format validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!phoneRegex.test(rawPhone.trim())) {
      return NextResponse.json({ error: 'Please enter a valid phone number (digits and standard formatting only).' }, { status: 400 });
    }

    // Server-side LinkedIn format validation (if provided)
    if (rawLinkedin && rawLinkedin.trim().length > 0) {
      const linkedinTrimmed = rawLinkedin.trim();
      const urlRegex = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i;
      if (!urlRegex.test(linkedinTrimmed)) {
        return NextResponse.json({ error: 'Please enter a valid URL for your LinkedIn profile.' }, { status: 400 });
      }
    }

    // Server-side file validation
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = resume.name.toLowerCase();
    const hasValidExt = allowedExtensions.some(ext => fileName.endsWith(ext));
    
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/octet-stream'
    ];
    const hasValidMime = allowedMimeTypes.includes(resume.type) || (resume.type === '' && hasValidExt);

    if (!hasValidExt || !hasValidMime) {
      return NextResponse.json({ error: 'Invalid file type. Only PDF and Word documents (.pdf, .doc, .docx) are allowed.' }, { status: 400 });
    }

    // 10MB maximum file size limit
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size exceeds the 10MB limit.' }, { status: 400 });
    }

    const jobTitle = sanitizeHeader(rawJobTitle);
    const firstName = sanitizeHeader(rawFirstName);
    const lastName = sanitizeHeader(rawLastName);
    const email = sanitizeHeader(rawEmail);
    const phone = sanitizeHeader(rawPhone);
    const linkedin = sanitizeHeader(rawLinkedin);

    // Convert resume file to buffer for Resend attachment
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const receivers = (
      process.env.HR_EMAIL_ADDRESS || 
      process.env.CONTACT_RECEIVER_EMAILS || 
      'rupesh.yadav@tecunique.com'
    ).split(',').map(e => e.trim()).filter(Boolean);

    // Escape all user inputs before interpolating into HTML email
    const safeJobTitle = escapeHtml(jobTitle);
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLinkedin = escapeHtml(linkedin);
    const safeCoverLetter = escapeHtml(rawCoverLetter);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM_ADDRESS || 'TecUnique Careers <onboarding@resend.dev>',
      to: receivers,
      replyTo: email,
      subject: `New Job Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #6366f1;">New Job Application Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Position:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${safeJobTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Applicant:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${safeFirstName} ${safeLastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #6366f1; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safePhone}</td>
            </tr>
            ${linkedin ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">LinkedIn:</td>
              <td style="padding: 8px 0;"><a href="${safeLinkedin}" target="_blank" style="color: #0284c7; text-decoration: none;">${safeLinkedin}</a></td>
            </tr>
            ` : ''}
          </table>
          
          <h3 style="color: #0f172a; margin-top: 20px; margin-bottom: 8px;">Cover Letter:</h3>
          <div style="white-space: pre-wrap; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; color: #334155; line-height: 1.6;">${safeCoverLetter}</div>
          
          <p style="margin-top: 20px; color: #64748b; font-size: 13px;">
            📎 <em>The applicant's resume (${escapeHtml(resume.name)}) is attached to this email.</em>
          </p>
          <p style="margin-top: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            Submitted via TECUNIQUE Careers Portal · Direct reply is enabled
          </p>
        </div>
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
      const errorMessage = typeof error === 'object' && error !== null && 'message' in error 
        ? String((error as any).message) 
        : 'Failed to send application email. Please try again or contact us directly.';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Apply API Error:", error);
    return NextResponse.json({ error: (error as Error).message || 'Server error processing application' }, { status: 500 });
  }
}
