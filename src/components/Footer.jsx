"use client";
import React, { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

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
        e.target.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Get the latest updates on software releases, special offers, and licensing news from Softify.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <input 
          type="hidden" 
          name="message" 
          value="Please add me to the newsletter"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            disabled={isSubmitting}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="text-sm px-2">...</span>
            ) : (
              <ArrowIcon className="w-4" />
            )}
          </button>
        </div>
      </div>
      {showSuccess && (
        <div className="mt-4 text-sm text-green-600">
          Thank you for subscribing to our newsletter!
        </div>
      )}
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              Softify
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © Softify {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
