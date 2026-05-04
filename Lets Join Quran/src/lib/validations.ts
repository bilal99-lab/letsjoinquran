import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  whatsapp: z.string().min(6, "Valid WhatsApp Number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const trialFormSchema = z.object({
  parentName: z.string().min(2, "Parent Name is required"),
  studentName: z.string().min(2, "Student Name is required"),
  studentAge: z.string().min(1, "Student Age is required"),
  country: z.string().min(2, "Country is required"),
  whatsappNumber: z.string().min(6, "Valid WhatsApp Number is required"),
  emailAddress: z.string().email("Valid email is required").optional().or(z.literal("")),
  selectedCourse: z.string().min(2, "Please select a course"),
  selectedPlan: z.string().min(2, "Please select a plan"),
  preferredDays: z.string().min(2, "Preferred days are required"),
  preferredTime: z.string().min(2, "Preferred time is required"),
  currentQuranLevel: z.string().min(2, "Please select current level"),
  teacherPreference: z.string().min(2, "Please select a teacher preference"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

export type TrialFormValues = z.infer<typeof trialFormSchema>;
