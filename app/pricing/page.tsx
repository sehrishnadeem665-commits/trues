import { Metadata } from "next";
import Image from "next/image";
import PricingCard from "@/components/ui/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the right vehicle information plan for your needs. Basic, Standard, and Premium packages available with VIN lookup, ownership records, accident records, and more.",
};

const comparisonFeatures = [
  { feature: "VIN / License Plate Lookup", basic: true, standard: true, premium: true },
  { feature: "Ownership Records", basic: true, standard: true, premium: true },
  { feature: "Title Records", basic: true, standard: true, premium: true },
  { feature: "Basic Vehicle Specifications", basic: true, standard: true, premium: true },
  { feature: "Email Delivery", basic: true, standard: true, premium: true },
  { feature: "Accident Records", basic: false, standard: true, premium: true },
  { feature: "Mileage Records Analysis", basic: false, standard: true, premium: true },
  { feature: "Recall Information", basic: false, standard: true, premium: true },
  { feature: "Market Value Estimate", basic: false, standard: true, premium: true },
  { feature: "Full Vehicle Specifications", basic: false, standard: false, premium: true },
  { feature: "Ownership Timeline", basic: false, standard: false, premium: true },
  { feature: "Enhanced Accident Analysis", basic: false, standard: false, premium: true },
  { feature: "Priority Support", basic: false, standard: false, premium: true },
];

export default function PricingPage() {
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
                <span className="text-sm font-medium text-purple-700">Simple Pricing</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Choose{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                 Your Plan
                </span>
              </h1>

              <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                Select the plan that fits your needs. All plans include comprehensive vehicle data delivered directly to your email. No hidden fees, no subscriptions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs md:text-sm text-gray-600">One-time payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs md:text-sm text-gray-600">Instant access</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl transform rotate-2 opacity-20 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/pricing.jpg"
                  alt="Professional vehicle team reviewing report"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs md:text-sm font-semibold">Trusted by 500K+ customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingCard />
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-sm font-medium text-purple-700">Compare Plans</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                See What&apos;s Included in Each Plan
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-600">
                Every plan comes with our guarantee of accuracy. Choose the level of detail that matches your needs.
              </p>

              <div className="relative mt-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional data analysis"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-xs md:text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs md:text-sm font-semibold text-gray-900">
                      Basic
                      <div className="text-purple-600 font-bold mt-1 text-xs md:text-sm">£35</div>
                    </th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs md:text-sm font-semibold text-gray-900 bg-purple-50">
                      Standard
                      <div className="text-purple-600 font-bold mt-1 text-xs md:text-sm">£45</div>
                    </th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs md:text-sm font-semibold text-gray-900">
                      Premium
                      <div className="text-purple-600 font-bold mt-1 text-xs md:text-sm">£55</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs md:text-sm text-gray-700">{row.feature}</td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                        {row.basic ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4 bg-purple-50/50">
                        {row.standard ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100">
                            <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                        {row.premium ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2669935/pexels-photo-2669935.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury vehicle background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            100% Satisfaction Guarantee
          </h2>
          <p className="mt-4 text-xs md:text-sm lg:text-base text-purple-100">
            We stand behind the accuracy of our vehicle information reports. If you&apos;re not satisfied, contact us and we&apos;ll make it right.
          </p>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/car.jpg"
                  alt="Secure payment"
                  fill
                  className="object-cover"
                />
              </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-xs md:text-sm text-gray-600">Pay securely through PayPal with buyer protection</p>
            </div>
            <div className="text-center p-6">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/fast.jpg"
                  alt="Fast delivery"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-xs md:text-sm text-gray-600">Get your report within minutes to hours</p>
            </div>
            <div className="text-center p-6">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/support.jpg"
                  alt="Premium support"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-xs md:text-sm text-gray-600">Our team is ready to help with any questions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
