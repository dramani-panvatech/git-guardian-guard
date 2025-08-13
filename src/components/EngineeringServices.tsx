import React from 'react';
import { Brain, Database, Cloud, Globe, Box, Users, AppWindow, Bug, Users2, TrendingUp, RotateCcw, Code2, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    bullets: string[];
    inverted?: boolean;
};

const services: Service[] = [
    {
        icon: Brain,
        title: "AI & ML",
        description:
            "Applied AI/ML to deliver automation and insights across your business.",
        bullets: [
            "Model development",
            "MLOps & monitoring",
            "LLM integration",
            "Chatbot solutions",
        ],
    },
    {
        icon: Database,
        title: "Data Engineering",
        description:
            "Modern data platforms, pipelines, and analytics for decision-making.",
        bullets: [
            "Data warehousing",
            "ETL/ELT pipelines",
            "BI & dashboards",
            "Real-time streaming",
        ],
        inverted: true,
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description:
            "Cloud-native architectures, DevOps, and cost-efficient operations.",
        bullets: [
            "Cloud migration",
            "Kubernetes & IaC",
            "Observability",
            "FinOps guidance",
        ],
    },
    {
        icon: Box,
        title: "Software Development",
        description:
            "Full-cycle product development from idea to secure, scalable delivery.",
        bullets: [
            "Web apps",
            "APIs & integrations",
            "Microservices",
            "Performance tuning",
        ],
        inverted: true,
    },
    {
        icon: Box,
        title: "Product Engineering",
        description:
            "Design, build, and evolve products with modern tech and best practices.",
        bullets: [
            "MVP to scale",
            "Design systems",
            "Accessibility",
            "Security hardening",
        ],
    },
    {
        icon: Users,
        title: "Dedicated Teams",
        description:
            "Augment your capabilities with cross-functional, senior engineering teams.",
        bullets: [
            "Team extensions",
            "Delivery leadership",
            "QA & DevOps",
            "Agile collaboration",
        ],
        inverted: true,
    },
    {
        icon: AppWindow,
        title: "Application Development",
        description:
            "Crafting responsive, high-performing applications for web and mobile.",
        bullets: [
            "Frontend & UX",
            "Mobile & PWA",
            "Performance optimization",
            "Internationalization",
        ],
    },
    {
        icon: Bug,
        title: "QA & Testing",
        description:
            "Automated and manual testing to ensure reliability and confidence.",
        bullets: [
            "Automation",
            "Performance testing",
            "Security testing",
            "CI/CD quality gates",
        ],
        inverted: true,
    },
];

const processSteps = [
             
    {
        number: 1,
        title: "Healthcare",
        description: "Transforming patient care with cutting-edge digital health solutions and secure data management.",
        duration: "1-2 weeks",
        icon: Heart,
        color: "bg-blue-500",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
        durationColor: "text-blue-500"
    },
    {
        number: 2,
        title: "Research",
        description: "Comprehensive market analysis, competitor research, and user behavior studies to inform design decisions",
        duration: "1-3 weeks",
        icon: TrendingUp,
        color: "bg-green-500",
        iconBg: "bg-green-100",
        iconColor: "text-green-500",
        durationColor: "text-green-500"
    },
    {
        number: 3,
        title: "Design",
        description: "Creating wireframes, interactive prototypes, and stunning visual designs with continuous user feedback",
        duration: "2-4 weeks",
        icon: RotateCcw,
        color: "bg-cyan-500",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-500",
        durationColor: "text-cyan-500"
    },
    {
        number: 4,
        title: "Development",
        description: "Building the final product with clean, maintainable code and rigorous testing for optimal performance",
        duration: "3-8 weeks",
        icon: Code2,
        color: "bg-orange-500",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
        durationColor: "text-orange-500"
    }
];

const EngineeringServices = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Software Development
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A proven methodology that ensures successful project delivery through strategic planning and iterative refinement
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line - Hidden on mobile, visible on desktop */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <Card className="bg-card border border-border hover:shadow-lg transition-shadow duration-300 h-full">
                                        <CardContent className="p-8 text-center">
                                            {/* Step Number Circle */}
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                                                    {step.number}
                                                </div>
                                            </div>

                                            {/* Icon */}
                                            <div className={`w-16 h-16 ${step.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                                                <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-foreground mb-4">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                                {step.description}
                                            </p>

                                            {/* Duration */}
                                            <div className="mt-auto">
                                                <span className={`text-sm font-medium ${step.durationColor}`}>
                                                    {step.duration}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineeringServices;