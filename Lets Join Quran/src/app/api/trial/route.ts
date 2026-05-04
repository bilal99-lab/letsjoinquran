import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { trialFormSchema } from "@/lib/validations";
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
    const validationResult = trialFormSchema.safeParse(body);
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
      // Map frontend fields to database columns
      const dbData = {
        parent_name: insertData.parentName,
        student_name: insertData.studentName,
        student_age: insertData.studentAge,
        country: insertData.country,
        whatsapp: insertData.whatsappNumber,
        email: insertData.emailAddress || null,
        selected_course: insertData.selectedCourse,
        selected_plan: insertData.selectedPlan,
        preferred_days: insertData.preferredDays,
        preferred_time: insertData.preferredTime,
        quran_level: insertData.currentQuranLevel,
        teacher_preference: insertData.teacherPreference,
        message: insertData.message || null,
      };

      const { error } = await supabase
        .from('trial_requests')
        .insert([dbData]);

      if (error) {
        console.error("Supabase insert error:", error);
      }
    } else {
      console.log("Supabase not configured. Mock saving trial request:", insertData);
    }

    // 4. Send Email Notification
    const emailSubject = `New Free Trial Request - ${insertData.studentName}`;
    const emailText = `
Free Trial Request Details:

Parent Name: ${insertData.parentName}
Student Name: ${insertData.studentName}
Student Age: ${insertData.studentAge}
Country: ${insertData.country}
WhatsApp: ${insertData.whatsappNumber}
Email: ${insertData.emailAddress || 'Not provided'}

Course Selected: ${insertData.selectedCourse}
Plan Selected: ${insertData.selectedPlan}
Preferred Days: ${insertData.preferredDays}
Preferred Time: ${insertData.preferredTime}

Current Quran Level: ${insertData.currentQuranLevel}
Teacher Preference: ${insertData.teacherPreference}

Message / Special Requirements:
${insertData.message || 'None provided'}
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
