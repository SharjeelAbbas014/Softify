"use client";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz4ZwMpHYW7Th0kn9q_oaldW5088wMJfNItybQhxNGIYF0xMCYWUFGhmmrmhiuf8FYp/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset(); // Reset form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn>
      <form className="gform" onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
          />
          <TextInput 
            label="Phone" 
            type="tel" 
            name="phone" 
            autoComplete="tel"
            required 
          />
          <TextInput 
            label="Message" 
            name="message"
            required 
          />
        </div>

        {showSuccess && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <Button 
          type="submit" 
          className="mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Let's work together"}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
