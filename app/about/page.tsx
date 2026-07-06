import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, Target, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about True Analyzers - your trusted partner for comprehensive vehicle information services across the United States. We provide accurate VIN lookup, ownership records, and vehicle data.",
};

const values = [
  {
    icon: Shield,
    title: "Accuracy First",
    description:
      "We prioritize accuracy in every report we deliver. Our data comes from trusted sources to ensure you get reliable vehicle information.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Our customers come first. We're committed to providing excellent service and support throughout your vehicle research process.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "We believe in complete transparency. Every report provides clear, understandable information without hidden details.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Our team combines years of automotive industry experience with advanced data analytics to deliver superior results.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "True Analyzers was established with a mission to provide accurate vehicle information to consumers.",
  },
  {
    year: "2021",
    title: "Nationwide Coverage",
    description:
      "Expanded our database to cover all 50 states across the United States.",
  },
  {
    year: "2022",
    title: "100,000 Reports",
    description:
      "Reached a significant milestone of delivering 100,000 vehicle information reports.",
  },
  {
    year: "2023",
    title: "Premium Services",
    description:
      "Launched Premium tier with instant processing and comprehensive data analysis.",
  },
  {
    year: "2024",
    title: "500,000+ Reports",
    description:
      "Delivered over half a million reports with a 99.9% accuracy rate.",
  },
];

const teamMembers = [
  {
    name: "David Thompson",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "15+ years in automotive technology",
  },
  {
    name: "Jennifer Martinez",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Expert in data management systems",
  },
  {
    name: "Michael Chen",
    role: "Lead Data Analyst",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Specialist in vehicle data mining",
  },
];

export default function AboutPage() {
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
                <Shield className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-purple-700">About True Analyzers</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Your Trusted Partner for{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                  Vehicle Information
                </span>
              </h1>

              <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                True Analyzers is dedicated to providing comprehensive, accurate vehicle data services across the United States. We help car buyers, sellers, and automotive professionals make informed decisions with reliable vehicle information.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700">500K+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Reports Delivered</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700">50</div>
                  <div className="text-xs sm:text-sm text-gray-500">States Covered</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl transform rotate-2 opacity-20 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Professional automotive team at work"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="grid grid-cols-1 gap-4">
                  {/* <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Vehicle inspection"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg mt-8">
                    <Image
                      src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Car dealership"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Trusted by</div>
                      <div className="text-purple-700 font-bold">500K+ Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                At True Analyzers, our mission is to empower vehicle buyers and owners across the United States with accurate, comprehensive, and accessible vehicle information. We believe that informed decisions lead to better outcomes.
              </p>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                We aggregate data from multiple trusted sources including DMVs, insurance companies, and official government databases to provide you with the most complete picture of any vehicle's history.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "All 50 states covered with comprehensive data",
                  "Data from trusted and verified sources",
                  "Fast delivery and excellent customer service",
                  "Clear, easy-to-understand reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Award className="h-4 w-4 text-purple-700" />
              <span className="text-sm font-medium text-purple-700">Our Values</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Core Values That Drive Us
            </h2>
            <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-base md:text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Users className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-purple-700">Our Team</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Meet the Experts Behind True Analyzers
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                Our team combines decades of experience in automotive technology, data analytics, and customer service to deliver the best vehicle information solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={350}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-xs md:text-xs text-purple-600">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 rounded-full"></div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="inline-block bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                      <div className="text-base md:text-lg font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Serving Customers Nationwide
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                While our headquarters is based in the United States, we serve customers across all 50 states. Our digital-first approach allows us to deliver fast, reliable vehicle information no matter where you are.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="text-lg md:text-2xl font-bold text-purple-700">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">Online Access</div>
                </div>
                <div className="p-3 md:p-4 bg-purple-50 rounded-xl">
                  <div className="text-lg md:text-2xl font-bold text-purple-700">50</div>
                  <div className="text-xs md:text-sm text-gray-600">States Covered</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern office workspace"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xs md:text-sm lg:text-base text-purple-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust True Analyzers for their vehicle information needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-5 sm:py-7 text-sm md:text-base shadow-xl"
            >
              <Link href="/pricing">Get Your Report</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-500 px-6 sm:px-8 py-5 sm:py-7 text-sm md:text-base"
            >
             
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
