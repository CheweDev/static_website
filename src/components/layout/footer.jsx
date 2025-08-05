import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://placehold.co/400"
                alt="FitPro Trainers Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                unoptimized
              />
              <span className="text-2xl font-bold">FitPro Trainers</span>
            </div>
            <p className="text-slate-400 mb-6">
              Your premier destination for personal trainer marketing. Transform
              your business with our expert digital marketing strategies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@fitprotrainers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Marketing Ave, Sample City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            © 2024 FitPro Trainers. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
