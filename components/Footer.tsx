
import Link from "next/link";
import { Car, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ],
  services: [
    { name: "VIN Lookup", href: "/pricing" },
    { name: "License Plate Search", href: "/pricing" },
    { name: "Vehicle Data", href: "/pricing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy (15 days)", href: "/refund-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-purple-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                True Analyzers
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Providing comprehensive vehicle information services across the United Kingdom.
              Get accurate, reliable data for your automotive needs.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@trueanalyzers.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@trueanalyzers.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-700 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-700 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-700 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} True Analyzers. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Trusted vehicle information services across the United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
