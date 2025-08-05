import { Zap } from "lucide-react";
import { trainingOptions } from "@/lib/data";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const QuoteForm = () => {
  return (
    <section
      id="quote"
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            Get Started Today
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Tell us about your fitness goals and we'll match you with the
            perfect trainer and program.
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-md shadow-2xl border border-white/30 btn-rounded-lg">
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl font-bold text-slate-900">
              Get Your Free Consultation
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours
              with a customized training plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-8 overflow-visible">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="firstName"
                  className="text-slate-800 font-semibold text-sm"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="h-12 px-4 text-base bg-white btn-rounded-lg border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="lastName"
                  className="text-slate-800 font-semibold text-sm"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-slate-800 font-semibold text-sm"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="phone"
                  className="text-slate-800 font-semibold text-sm"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="trainingType"
                className="text-slate-800 font-semibold text-sm"
              >
                What type of training interests you?
              </Label>
              <Select>
                <SelectTrigger className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400">
                  <SelectValue placeholder="Select training type" />
                </SelectTrigger>
                <SelectContent className="z-[999] bg-white">
                  <SelectItem value="general">
                    General Fitness & Accountability
                  </SelectItem>
                  <SelectItem value="weightloss">Weight Loss</SelectItem>
                  <SelectItem value="boxing">Boxing Training</SelectItem>
                  <SelectItem value="mma">MMA/Kickboxing/Muay Thai</SelectItem>
                  <SelectItem value="soccer">Soccer Training</SelectItem>
                  <SelectItem value="basketball">
                    Basketball Training
                  </SelectItem>
                  <SelectItem value="yoga">Yoga Training</SelectItem>
                  <SelectItem value="volleyball">
                    Volleyball Training
                  </SelectItem>
                  <SelectItem value="gymnastics">
                    Gymnastics Training
                  </SelectItem>
                  <SelectItem value="baseball">Baseball Training</SelectItem>
                  <SelectItem value="football">Football Training</SelectItem>
                  <SelectItem value="swimming">Swimming Training</SelectItem>
                  <SelectItem value="bodybuilding">Bodybuilding</SelectItem>
                  <SelectItem value="calisthenics">Calisthenics</SelectItem>
                  <SelectItem value="pilates">Pilates</SelectItem>
                  <SelectItem value="nutrition">Nutrition Coaching</SelectItem>
                  <SelectItem value="prenatal">Prenatal Training</SelectItem>
                  <SelectItem value="postpartum">
                    Postpartum Training
                  </SelectItem>
                  <SelectItem value="seniors">Senior Training (50+)</SelectItem>
                  <SelectItem value="teens">Teen Training</SelectItem>
                  <SelectItem value="kids">Kids Training</SelectItem>
                  <SelectItem value="specialneeds">
                    Special Needs Training
                  </SelectItem>
                  <SelectItem value="couples">Couples Training</SelectItem>
                  <SelectItem value="vegan">
                    Vegan Lifestyle Training
                  </SelectItem>
                  <SelectItem value="menopause">
                    Menopause Support Training
                  </SelectItem>
                  <SelectItem value="obese">
                    Weight Management for Obesity
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label
                  htmlFor="trainerGender"
                  className="text-slate-800 font-semibold text-sm"
                >
                  Trainer Preference
                </Label>
                <Select>
                  <SelectTrigger className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400">
                    <SelectValue placeholder="Select preference (optional)" />
                  </SelectTrigger>
                  <SelectContent className="z-[999] bg-white">
                    <SelectItem value="no-preference">No Preference</SelectItem>
                    <SelectItem value="female">Female Trainer</SelectItem>
                    <SelectItem value="male">Male Trainer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="experience"
                  className="text-slate-800 font-semibold text-sm"
                >
                  Current Fitness Level
                </Label>
                <Select>
                  <SelectTrigger className="h-12 px-4 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400">
                    <SelectValue placeholder="Select your fitness level" />
                  </SelectTrigger>
                  <SelectContent className="z-[999] bg-white">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="goals"
                className="text-slate-800 font-semibold text-sm"
              >
                Tell us about your fitness goals
              </Label>
              <Textarea
                id="goals"
                placeholder="Describe what you want to achieve, any specific requirements, timeline, etc."
                rows={4}
                className="min-h-[120px] px-4 py-3 text-base bg-white btn-rounded-md border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 hover:border-slate-400"
              />
            </div>
            <div className="space-y-4">
              <Label className="text-slate-800 font-semibold text-sm">
                Preferred Training Location
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                {trainingOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={option.id}
                      className="h-5 w-5 border-slate-400 bg-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                    <Label htmlFor={option.id} className="text-slate-600">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r btn-rounded-lg from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-lg">
                <Zap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Get My Free Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteForm;
