import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Code, 
  Terminal, 
  Monitor, 
  Settings,
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Shield,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OnDemandDevelopers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const onDemandDevelopersServices = [
    {
      icon: <Code size={48} aria-hidden="true" />,
      title: "Frontend Development",
      description: "Expert frontend developers skilled in modern frameworks and technologies.",
      features: [
        "React, Angular, Vue.js",
        "Responsive web design",
        "UI/UX implementation",
        "Progressive web apps"
      ],
      color: "blue",
      bgColor: "blue-50",
      iconColor: "blue-600"
    },
    {
      icon: <Terminal size={48} aria-hidden="true" />,
      title: "Backend Development",
      description: "Experienced backend developers for robust server-side solutions.",
      features: [
        "Node.js, Python, Java",
        "API development",
        "Database design",
        "Cloud integration"
      ],
      color: "green",
      bgColor: "green-50",
      iconColor: "green-600"
    },
    {
      icon: <Monitor size={48} aria-hidden="true" />,
      title: "Full-Stack Development",
      description: "Versatile full-stack developers for end-to-end project delivery.",
      features: [
        "Complete web applications",
        "Mobile app development",
        "System architecture",
        "DevOps integration"
      ],
      color: "purple",
      bgColor: "purple-50",
      iconColor: "purple-600"
    },
    {
      icon: <Settings size={48} aria-hidden="true" />,
      title: "Specialized Solutions",
      description: "Expert developers for niche technologies and specialized requirements.",
      features: [
        "AI/ML development",
        "Blockchain solutions",
        "IoT applications",
        "Custom integrations"
      ],
      color: "orange",
      bgColor: "orange-50",
      iconColor: "orange-600"
    }
  ];

  const engagementModels = [
    {
      icon: <Clock size={32} aria-hidden="true" />,
      title: "Hourly Basis",
      description: "Flexible hourly engagement for short-term projects and consultations."
    },
    {
      icon: <Users size={32} aria-hidden="true" />,
      title: "Dedicated Teams",
      description: "Full-time dedicated development teams for ongoing projects."
    },
    {
      icon: <Globe size={32} aria-hidden="true" />,
      title: "Project-Based",
      description: "Fixed-scope project delivery with defined timelines and deliverables."
    },
    {
      icon: <Zap size={32} aria-hidden="true" />,
      title: "Retainer Model",
      description: "Monthly retainer for continuous development support and maintenance."
    }
  ];

  const benefits = [
    {
      icon: <Shield size={32} aria-hidden="true" />,
      title: "Vetted Talent",
      description: "Rigorously screened developers with proven track records and technical expertise."
    },
    {
      icon: <Award size={32} aria-hidden="true" />,
      title: "Quality Assurance",
      description: "Comprehensive code reviews and quality checks for every deliverable."
    },
    {
      icon: <Clock size={32} aria-hidden="true" />,
      title: "Fast Deployment",
      description: "Quick onboarding and project initiation within 48-72 hours."
    },
    {
      icon: <Users size={32} aria-hidden="true" />,
      title: "Scalable Teams",
      description: "Easily scale your development team up or down based on project needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-auto" style={{ marginTop: '76px' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                On-Demand Developers
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Access skilled developers on-demand to accelerate your projects with flexible engagement models 
                and expertise across all modern technologies and frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Services
                  <ArrowRight size={24} aria-hidden="true" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Code size={48} className="text-blue-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Frontend</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Terminal size={48} className="text-green-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Backend</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Monitor size={48} className="text-purple-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Full-Stack</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Settings size={48} className="text-orange-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Specialized</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Developer Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our carefully vetted developers bring deep expertise across all modern technologies 
              and development stacks to accelerate your projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {onDemandDevelopersServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-orange-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${service.bgColor} rounded-2xl w-20 h-20`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the engagement model that best fits your project requirements and budget constraints.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-6 bg-orange-50 rounded-2xl w-16 h-16 mx-auto">
                    <span className="text-orange-600">
                      {model.icon}
                    </span>
                  </div>
                  <h5 className="text-xl font-bold mb-3 text-gray-900">{model.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose Our Developers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide more than just developers - we deliver complete solutions with quality assurance and ongoing support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-16 h-16 mx-auto">
                  <span className="text-blue-600">
                    {benefit.icon}
                  </span>
                </div>
                <h5 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h5>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started with our developers in just a few simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">Share Your Requirements</h5>
              <p className="text-gray-600 leading-relaxed">Tell us about your project, technology stack, and timeline requirements.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">Meet Your Developers</h5>
              <p className="text-gray-600 leading-relaxed">We match you with pre-screened developers who fit your specific needs.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={300}>
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">Start Development</h5>
              <p className="text-gray-600 leading-relaxed">Begin your project with clear milestones and regular progress updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Scale Your Development Team?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get access to skilled developers who can start working on your project within 48-72 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Get Started
              <ArrowRight size={24} aria-hidden="true" />
            </a>
            <a 
              href="tel:1-800-916-2459" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnDemandDevelopers;