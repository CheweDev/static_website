"use client";

import { MessageSquare, Send } from "lucide-react";
import {
  trainingSpecialties,
  currentMarketingOptions,
  budgetOptions,
  urgencyOptions,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";

export default function ContactFormSection() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Send className="h-8 w-8 text-blue-600" />
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
            with a customized marketing strategy.
          </p>
        </div>

        <Card className="bg-white border-0 border-slate-200 rounded-xl shadow-xl overflow-hidden">
          <CardHeader className="text-center p-4">
            <CardDescription className="text-lg text-slate-600 mt-2">
              Tell us about your business and marketing goals, and we'll provide
              personalized recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-7 p-8">
            <form action={formAction} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-slate-700 font-medium"
                  >
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-slate-700 font-medium"
                  >
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                    className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="businessName"
                  className="text-slate-700 font-medium"
                >
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Enter your business name (if applicable)"
                  className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="trainingType"
                  className="text-slate-700 font-medium"
                >
                  What type of personal training do you specialize in?
                </Label>
                <Select name="specialty">
                  <SelectTrigger className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200">
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[999]">
                    {trainingSpecialties.map((specialty) => (
                      <SelectItem
                        key={specialty}
                        value={specialty.toLowerCase().replace(/\s/g, "-")}
                      >
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="text-slate-700 font-medium"
                >
                  Your Location (City, State)
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Miami, FL"
                  className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="currentMarketing"
                  className="text-slate-700 font-medium"
                >
                  What marketing are you currently doing?
                </Label>
                <Select name="currentMarketing">
                  <SelectTrigger className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200">
                    <SelectValue placeholder="Select current marketing efforts" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[999]">
                    {currentMarketingOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option.toLowerCase().replace(/\s/g, "-")}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-slate-700 font-medium">
                  Monthly Marketing Budget
                </Label>
                <Select name="budget">
                  <SelectTrigger className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[999]">
                    {budgetOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option.toLowerCase().replace(/\s/g, "-")}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-slate-700 font-medium">
                  What are your main business goals?
                </Label>
                <Textarea
                  id="goals"
                  name="goals"
                  placeholder="Tell us about your goals - more clients, higher rates, expand to new locations, etc."
                  rows={4}
                  className="min-h-[120px] px-4 py-3 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgency" className="text-slate-700 font-medium">
                  How soon do you want to get started?
                </Label>
                <Select name="urgency">
                  <SelectTrigger className="h-10 btn-rounded-md px-4 text-base border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-200">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[999]">
                    {urgencyOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option.toLowerCase().replace(/\s/g, "-")}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-lg"
              >
                <MessageSquare className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                {isPending ? "Sending Message..." : "Send Message"}
              </Button>

              {state && (
                <p
                  className={`mt-4 text-center p-3 rounded-md ${
                    state.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
