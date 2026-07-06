"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GlassButtonElement } from "@/app/components/ui/GlassButton";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";
import { staggerContainer, staggerItem } from "@/app/lib/animations";
import type { ContactSubject } from "@/app/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum([
    "Freelance Project",
    "Job Opportunity",
    "Research Collaboration",
    "Other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects: ContactSubject[] = [
  "Freelance Project",
  "Job Opportunity",
  "Research Collaboration",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "Freelance Project" },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <LiquidGlass variant="elevated" className="flex flex-col items-center justify-center p-12 text-center">
          <CheckCircle2 className="mb-4 h-16 w-16 text-success" />
          <h3 className="text-xl font-semibold text-text-primary">
            Message Sent Successfully!
          </h3>
          <p className="mt-2 text-text-secondary">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
        </LiquidGlass>
      </motion.div>
    );
  }

  return (
    <LiquidGlass variant="elevated" className="p-8">
      <motion.form
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <motion.div variants={staggerItem}>
          <label htmlFor="name" className="mb-2 block text-sm text-text-secondary">
            Name *
          </label>
          <input
            id="name"
            {...register("name")}
            className="input-glass focus-ring"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="email" className="mb-2 block text-sm text-text-secondary">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="input-glass focus-ring"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="subject" className="mb-2 block text-sm text-text-secondary">
            Subject *
          </label>
          <select id="subject" {...register("subject")} className="input-glass focus-ring">
            {subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-bg-secondary">
                {subject}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={staggerItem}>
          <label htmlFor="message" className="mb-2 block text-sm text-text-secondary">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="input-glass focus-ring resize-none"
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </motion.div>

        <motion.div variants={staggerItem}>
          <GlassButtonElement
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            liquidFilter
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </GlassButtonElement>
        </motion.div>
      </motion.form>
    </LiquidGlass>
  );
}
