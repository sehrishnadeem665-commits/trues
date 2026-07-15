"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Shield,
  Clock,
  BadgeCheck,
  ArrowRight,
  CheckCircle,
  Database,
  FileText,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Search,
    title: "VIN Lookup",
    description:
      "Instantly verify vehicle identification numbers with our advanced VIN lookup system. Access comprehensive data about any vehicle in seconds.",
  },
  {
    icon: Database,
    title: "Ownership Records",
    description:
      "Research complete ownership history and title records. Know exactly how many owners a vehicle has had and understand its past.",
  },
  {
    icon: AlertTriangle,
    title: "Accident Records",
    description:
      "Access detailed accident records to understand a vehicle's past incidents and make informed purchasing decisions.",
  },
  {
    icon: FileText,
    title: "Title Records",
    description:
      "Get detailed title information including any branded titles, salvaged vehicles, or other title issues that might affect value.",
  },
  {
    icon: BadgeCheck,
    title: "Recall Information",
    description:
      "Stay informed with up-to-date recall information. Check if any safety recalls apply to the vehicle you're researching.",
  },
  {
    icon: BarChart3,
    title: "Market Value",
    description:
      "Get accurate market value estimates based on real-time data. Understand what a vehicle is truly worth before buying or selling.",
  },
];

const stats = [
  { value: "500K+", label: "Reports Delivered" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "4", label: "Nations Covered" },
  { value: "24/7", label: "Support Available" },
];

const testimonials = [
  {
    quote:
      "True Analyzers provided exactly the information I needed before purchasing my used car. The detailed records saved me from a potential bad investment.",
    author: "Sarah M.",
    location: "Texas",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    quote:
      "Fast, accurate, and professional. I use their services for all my vehicle purchases now. Highly recommended for anyone in the market.",
    author: "James R.",
    location: "California",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    quote:
      "The ownership timeline feature was incredibly helpful. I could see exactly where the car had been and made an informed decision.",
    author: "Michael T.",
    location: "Florida",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
];

const faqData = [
  {
    question: "What information do I need to request a vehicle data report?",
    answer:
      "You only need a VIN (Vehicle Identification Number) or license plate number to request a report. Our system will gather all available information and deliver it to your email in PDF format.",
  },
  {
    question: "How quickly will I receive my vehicle information?",
    answer:
      "Processing times vary by plan. Basic reports are delivered within 2 - 4 hours, Standard within 4 - 8 hours, and Premium reports are processed within 1 hour. All reports are delivered directly to your email.",
  },
  {
    question: "What states do you cover?",
    answer:
      "We provide comprehensive vehicle data across the whole of the United Kingdom, including England, Scotland, Wales, and Northern Ireland. Our database includes records from official transport and insurance sources.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use industry-standard encryption to protect all data transmissions. Your personal information is never shared with third parties and is only used to deliver your requested reports.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods through PayPal, including credit cards, debit cards, and PayPal balance. Your payment is processed securely through PayPal's trusted platform.",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-purple-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-200"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Shield className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-purple-700">
                  Trusted Vehicle Data Services
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get Complete{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                  Vehicle Information
                </span>{" "}
                Instantly
              </h1>

              <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed max-w-xl">
                Access comprehensive VIN lookup, license plate search, ownership
                records, title information, accident records, and more. Make
                informed decisions with accurate vehicle data.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white shadow-xl shadow-purple-500/25 px-6 sm:px-8 py-5 sm:py-7 text-sm md:text-base font-semibold"
                >
                  <Link href="/pricing">
                    Get Your Report
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-5 sm:py-7 text-sm md:text-base font-semibold"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-xs md:text-sm text-gray-600">UK-Wide Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-xs md:text-sm text-gray-600">Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-xs md:text-sm text-gray-600">Secure & Private</span>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl transform rotate-2 opacity-20 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Professional vehicle inspection and analysis"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 backdrop-blur-lg rounded-xl">
                        <Search className="h-5 w-5 text-white" />
                      </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Vehicle Data Report
                    </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["VIN Lookup", "Ownership Records", "Title Records", "Accident Records"].map((item) => (
                        <span key={item} className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white text-xs md:text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1486273/pexels-photo-1486273.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury car background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-purple-200 text-xs md:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-sm font-medium text-purple-700">Why Choose Us</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Comprehensive Vehicle Data Services
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                Get all the information you need to make confident decisions about any vehicle. Our advanced database covers millions of vehicles across the United Kingdom.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3806289/pexels-photo-3806289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Car data analytics dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-200 bg-white hover:bg-purple-50/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-base md:text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Clock className="h-4 w-4 text-purple-700" />
              <span className="text-sm font-medium text-purple-700">Quick & Easy Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
              Get your vehicle information in three simple steps
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Plan",
                description:
                  "Choose between Basic, Standard, or Premium package based on your needs.",
                image: "https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                step: "2",
                title: "Enter Vehicle Details",
                description:
                  "Provide the VIN or license plate number along with your contact information.",
                image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                step: "3",
                title: "Receive Your Report",
                description:
                  "Get your comprehensive vehicle data report delivered to your email.",
                image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative group">
                {index < 2 && (
                  <div className="hidden md:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-purple-300"></div>
                )}
                <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                  <div className="relative h-40 w-full rounded-xl overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xl font-bold shadow-lg shadow-purple-500/30 -mt-2 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/review.jpg"
                alt="Happy customer with new car"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-semibold ml-2">5.0 Rating</span>
                </div>
                <p className="text-white text-lg mt-2 font-medium">500K+ Happy Customers</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-sm font-medium text-purple-700">Customer Stories</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Trusted by Thousands
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                See what our customers have to say about our services. Join thousands of satisfied vehicle owners across the United Kingdom.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                  <p className="text-gray-700 italic text-xs md:text-sm lg:text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-sm font-medium text-purple-700">FAQ</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.
              </p>
              <div className="relative mt-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/faq.jpg"
                  alt="Customer support team"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl px-6 border border-purple-100"
                  >
                    <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline">
                      <span className="text-xs md:text-sm lg:text-base text-gray-900 font-semibold">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-sm text-gray-600 pb-4 md:pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury vehicle"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute top-1/2 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
          <div className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-300"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Ready to Get Your Vehicle Information?
          </h2>
          <p className="mt-4 text-xs md:text-sm lg:text-base text-purple-100 max-w-2xl mx-auto">
            Choose your plan and get comprehensive vehicle data delivered to
            your email in minutes.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-purple-700 hover:bg-purple-50 px-6 sm:px-10 py-5 sm:py-7 text-sm md:text-base font-semibold shadow-xl"
          >
            <Link href="/pricing">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
