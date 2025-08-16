"use client";

import { useState } from "react";
import CustomInput from "../ui/customInput";
import { expectations, quoteFormFields } from "@/lib/data";
import {
  MessageSquare,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message:
          "Thank you for your inquiry. We'll contact you within 24 hours to discuss your marketing strategy.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section
      id="quote"
      className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Free Consultation Available
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Personal Training Business?
          </h2>
          <p className="text-md text-white max-w-3xl mx-auto leading-relaxed">
            Get a custom marketing strategy designed specifically for personal
            trainers. Let's discuss how we can help you attract more qualified
            clients and grow your business.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-white">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" /> 4.8/5 Client
              Rating
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-500 mr-2" /> 500+ Trainers
              Served
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-500 mr-2" /> Average 40%
              Growth
            </div>
          </div>
        </div>

        <div className="bg-white btn-rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <MessageSquare className="h-6 w-6 mr-3" /> Request Your Free
              Consultation
            </h3>
            <p className="text-blue-100 mt-2">
              Tell us about your business and goals
            </p>
          </div>

          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                {quoteFormFields.map((field, idx) => (
                  <CustomInput
                    key={field.name || idx}
                    {...field}
                    onChange={handleInputChange}
                  />
                ))}
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 btn-rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Request Free Consultation
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              {submitStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {submitStatus.message}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
