"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dumbbell,
  Users,
  Target,
  Clock,
  BoxIcon as Boxing,
  ShoppingBasketIcon as Basketball,
  SpaceIcon as Yoga,
  Weight,
  GavelIcon as Gymnastics,
  Salad,
  Baby,
  BabyIcon as Child,
  Accessibility,
  HeartPulse,
  UserRoundIcon as UserRoundFemale,
  UserRoundIcon as UserRoundMale,
} from "lucide-react";

const iconMap = {
  Dumbbell,
  Users,
  Target,
  Clock,
  Boxing,
  Basketball,
  Yoga,
  Weight,
  Gymnastics,
  Salad,
  Baby,
  Child,
  Accessibility,
  HeartPulse,
  UserRoundFemale,
  UserRoundMale,
};

const ServicesGrid = ({
  popular,
  specialized,
  lifeStage,
  trainerPreferences,
}) => {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-slate-50">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Specialized Training Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whatever your fitness goals, age, or specialty needs, we have
            certified trainers ready to help you achieve extraordinary results.
          </p>
        </div>

        {/* Popular Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Most Popular Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popular.map((service) => {
              const IconComponent = iconMap[service.icon] || service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-500 border border-slate-200 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Specialized Training */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Specialized Training
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialized.map((service) => {
              const IconComponent = iconMap[service.icon] || service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Life Stage Training */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Life Stage & Special Needs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifeStage.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-7 w-7 text-white" />
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trainer Preferences */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Choose Your Perfect Match
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trainerPreferences.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white overflow-hidden hover:-translate-y-2"
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${service.gradient}`}
                  ></div>
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
