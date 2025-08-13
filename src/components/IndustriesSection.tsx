import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Heart, 
  DollarSign, 
  TrendingUp, 
  GraduationCap, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Globe,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Omega,
  Handshake,
  TabletSmartphone,
  Code
} from 'lucide-react';

const industries = [
  {
    title: "Healthcare",
    description: "Transforming patient care with cutting-edge digital health solutions and secure data management.",
    icon: <Heart className="w-12 h-12" />,
    features: ["EHR Systems", "Telemedicine", "HIPAA Compliance", "Patient Portals"],
    color: "red",
    bgGradient: "from-red-500/20 to-red-600/10"
  },
  
  {
    title: "EdTech Platform",
    description: "Innovative learning management systems and educational technology solutions.",
    icon: <GraduationCap className="w-12 h-12" />,
    features: ["LMS Development", "Interactive Learning", "Student Analytics", "Virtual Classrooms"],
    color: "purple",
    bgGradient: "from-purple-500/20 to-purple-600/10"
  },
  {
    title: "FinTech Platform",
    description: "Next-generation financial technology solutions for modern digital banking needs.",
    icon: <Smartphone className="w-12 h-12" />,
    features: ["Mobile Banking", "Digital Wallets", "Blockchain", "AI-Powered Insights"],
    color: "yellow",
    bgGradient: "from-yellow-500/20 to-yellow-600/10"
  }
];

const caseStudies = [
  {
    title: "AI & ML",
    description: "Use AI & ML to automate, gain insights, streamline operations, and stay ahead in business.",
    icon: <Brain className="w-8 h-8" />,
    category: "Healthcare AI",
    results: ["AI Development", "ML Development", "Generative AI"],
    bgGradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Data Engineering",
    description: "Turn data into actionable insights with engineering that drives decisions, optimizes processes, and boosts competitiveness.",
    icon: <DollarSign className="w-12 h-12" />,
    category: "FinTech",
    results: ["Data Analytics", "BI Implementation", "Big Data Solutions"],
    bgGradient: "from-green-600 to-green-800"
  },
  {
    title: "Cloud Services",
    description: "Leverage cloud solutions to reduce costs, streamline operations, and drive innovation with tailored infrastructure support.",
    icon: <Globe className="w-8 h-8" />,
    category: "Security",
    results: ["Azure", "Cloud Migration", "Cloud FinOps Services"],
    bgGradient: "from-red-600 to-red-800"
  },
  {
    title: "Software Development",
    description: "Empower your business with custom software—innovative, scalable solutions built to drive growth and performance.",
    icon: <Code className="w-8 h-8" />,
    category: "Development",
    results: ["CRM Consulting", "Custom Software Development", "Software Consulting"],
    bgGradient: "from-purple-600 to-purple-800"
  },
  {
    title: "Software Product Engineering",
    description: "We build bespoke software using cutting-edge tech, helping businesses achieve digital goals and drive sustainable growth.",
    icon: <Omega  className="w-8 h-8" />,
    category: "Development",
    results: ["MVP Development", "Product UI/UX Design", "Digital Transformation"],
    bgGradient: "from-red-600 to-red-800"
  },
  {
    title: "Application Development",
    description: "From concept to launch, we build scalable, robust, and intuitive apps tailored to your business.",
    icon: <Smartphone className="w-8 h-8" />,
    category: "Development",
    results: ["Web App Development", "Backend Development", "Frontend Development"],
    bgGradient: "from-purple-600 to-purple-800"
  },
  {
    title: "Dedicated Software Teams",
    description: "Quickly expand development with skilled pros who integrate seamlessly for efficient collaboration and faster delivery.",
    icon: <Handshake className="w-8 h-8" />,
    category: "Development",
    results: ["Staff Augmentation", "Hire Developers", "Nearshore Software Development"],
    bgGradient: "from-blue-600 to-blue-800"
  },
  {
    title: "QA & Testing",
    description: "Our QA services ensure top software quality, reliability, and performance through thorough testing and automation.",
    icon: <TabletSmartphone className="w-12 h-12" />,
    category: "Development",
    results: ["QA Consulting", "Web App Testing", "Mobile App Testing"],
    bgGradient: "from-green-600 to-green-800"
  }
];

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-primary-50 border border-primary-200 text-sm font-semibold text-primary-600 backdrop-blur-sm">
              <Globe className="w-4 h-4 mr-2" />
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Industry-Specific IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver specialized technology solutions tailored to your industry's unique challenges, 
            ensuring compliance, security, and optimal performance across all sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${industry.color}-50 border border-${industry.color}-200 text-${industry.color}-600 group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-all duration-300`}>
                    {industry.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white/90 transition-colors">
                  {industry.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className={`text-${industry.color}-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors`} />
                      <span className="text-gray-700 text-sm group-hover:text-white/90 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`inline-flex items-center gap-2 px-6 py-3 text-${industry.color}-600 font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group-hover:text-white hidden`}>
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div data-aos="fade-up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 border border-gray-200 text-sm font-semibold text-gray-700">
              <Building className="w-4 h-4 mr-2" />
              INDUSTRIES WE SERVE
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Proven Results Across Industries
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed businesses with innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-3xl text-white transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient}`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white group-hover:scale-110 transition-transform duration-300">
                      {study.icon}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium border border-white/30">
                      {study.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors leading-tight">
                    {study.title}
                  </h4>
                  
                  <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <CheckCircle size={14} className="text-white/80 mr-2 flex-shrink-0" />
                        <span className="text-white/90 text-xs">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300 hidden">
                    View Case Study
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;