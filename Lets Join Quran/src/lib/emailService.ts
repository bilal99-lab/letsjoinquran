import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'mock_user',
    pass: process.env.EMAIL_PASS || 'mock_pass',
  },
});

export async function sendEmail({ to, subject, text, html }: { to: string, subject: string, text: string, html?: string }) {
  // If no credentials, we just mock the email sending
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Mock Email Sending:");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Text:", text);
    return { success: true, message: 'Mock email sent successfully (Configure EMAIL_USER in .env)' };
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Lets Join Quran" <noreply@letsjoinquran.com>',
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
