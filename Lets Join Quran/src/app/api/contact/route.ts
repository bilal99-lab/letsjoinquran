import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { contactFormSchema } from "@/lib/validations";
import { sendEmail } from "@/lib/emailService";

// Initialize Supabase client only if keys are present
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey) 
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Server-side validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: validationResult.error.format() },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Spam protection check
    if (data.honeypot) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    // Remove honeypot from data before processing
    const { honeypot, ...insertData } = data;

    // 3. Database Insertion (if configured)
    if (supabase) {
      const { error } = await supabase
        .from('contact_messages')
        .insert([insertData]);

      if (error) {
        console.error("Supabase insert error:", error);
      }
    } else {
      console.log("Supabase not configured. Mock saving contact message:", insertData);
    }

    // 4. Send Email Notification
    const emailSubject = `New Contact Message from ${insertData.name}`;
    const emailText = `
Name: ${insertData.name}
WhatsApp: ${insertData.whatsapp}
Email: ${insertData.email || 'Not provided'}

Message:
${insertData.message}
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@letsjoinquran.com',
      subject: emailSubject,
      text: emailText,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
