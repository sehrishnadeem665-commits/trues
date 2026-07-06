"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MessageSquare, Send, CheckCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours.",
    value: "info@trueanalyzers.com",
  },
  {
    icon: MessageSquare,
    title: "Support",
    description: "Our team is available to help with any questions.",
    value: "Contact Form",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(body?.error || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 bg-gradient-to-br from-white via-purple-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <MessageSquare className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-purple-700">Contact Us</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Get in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>

              <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                Have questions about our vehicle information services? We&apos;re here to help. Reach out to us and we&apos;ll respond as soon as possible.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-sm md:text-base font-semibold text-gray-900">Quick Response</span>
                    <p className="text-xs md:text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-sm md:text-base font-semibold text-gray-900">Expert Support</span>
                    <p className="text-xs md:text-sm text-gray-600">Our team knows vehicle data inside out</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl transform rotate-2 opacity-20 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional customer support team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-8">
                We&apos;re here to help with any questions about our vehicle data services. Fill out the form and we&apos;ll be in touch within 24 hours.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg">
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{method.description}</p>
                      <p className="text-xs md:text-sm text-purple-700 font-medium mt-2">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-sm md:text-base font-semibold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-xs md:text-sm text-purple-100">
                    <p>Monday - Sunday: 9:00 AM - 6:00 PM EST</p>
                   
                  </div>
                </div>
              </div>

              <div className="mt-6 relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/faq.jpg"
                  alt="Support team ready to help"
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-lg border border-purple-100 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for contacting True Analyzers. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          required
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select name="subject" required>
                        <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Status</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        rows={6}
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}

              {/* Additional Help Section */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Vehicle documentation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Need Help with an Order?</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">Check the status of your vehicle report or get help with your purchase.</p>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                    View Order Status
                  </Button>
                </div>

                <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.pexels.com/photos/5453899/pexels-photo-5453899.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="FAQ section"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Looking for Quick Answers?</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">Browse our FAQ section for answers to common questions.</p>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
                    <a href="/#faq">View FAQ</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
