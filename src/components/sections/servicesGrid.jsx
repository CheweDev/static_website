"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Most Popular Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Personal trainer working with client"
                layout="fill"
                objectFit="cover"
                className="transition-transform rounded-3xl duration-500 hover:scale-105"
                unoptimized
              />
            </div>

            <div className="space-y-8">
              {popular.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div key={service.id} className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-7 w-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Life Stage & Special Needs
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              {lifeStage.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div key={service.id} className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      {IconComponent && (
                        <IconComponent className="h-7 w-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Diverse age groups exercising"
                layout="fill"
                objectFit="cover"
                className="transition-transform rounded-3xl duration-500 hover:scale-105"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Specialized Training
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialized.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
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
                  className="group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2 hover:scale-[1.03] group-hover:bg-blue-50"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${service.gradient}`}
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
