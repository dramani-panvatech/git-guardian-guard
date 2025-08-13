import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Activity, 
  Shield, 
  Database, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Server,
  Lock,
  Users,
  Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ElectronicHealthRecords = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32" style={{ marginTop: '76px' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/it-solutions')}
            className="inline-flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to IT Solutions
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Electronic Health Records (EHR)
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Comprehensive digital patient records management system for healthcare providers, 
                ensuring seamless data integration and improved patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Features
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <Activity size={120} className="text-blue-300 mb-6 mx-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Digital Health Records</h3>
                  <p className="text-blue-100">Complete patient data management solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our EHR system provides comprehensive functionality to streamline healthcare operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database size={48} />,
                title: "Patient Data Management",
                description: "Centralized storage and management of all patient information with real-time access",
                color: "blue"
              },
              {
                icon: <Shield size={48} />,
                title: "Clinical Decision Support",
                description: "AI-powered insights and recommendations to support clinical decisions",
                color: "green"
              },
              {
                icon: <Server size={48} />,
                title: "Interoperability Standards",
                description: "Full compliance with HL7 FHIR standards for seamless data exchange",
                color: "purple"
              },
              {
                icon: <Lock size={48} />,
                title: "HIPAA Compliance",
                description: "Bank-level security ensuring complete patient privacy protection",
                color: "red"
              },
              {
                icon: <Users size={48} />,
                title: "Multi-Provider Access",
                description: "Secure access for multiple healthcare providers with role-based permissions",
                color: "yellow"
              },
              {
                icon: <Clock size={48} />,
                title: "Real-time Updates",
                description: "Instant synchronization across all connected systems and devices",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-blue-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${feature.color}-50 rounded-2xl w-20 h-20`}>
                    <span className={`text-${feature.color}-600`}>
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Benefits for Your Healthcare Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your healthcare delivery with our comprehensive EHR solution
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="space-y-6">
                {[
                  "40% reduction in documentation time",
                  "99.9% system uptime achieved",
                  "100% HIPAA compliance maintained",
                  "25% improvement in patient care metrics",
                  "Seamless integration with existing systems",
                  "Real-time patient data synchronization"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Contact us today to learn how our EHR system can transform your healthcare organization.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Contact Us
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectronicHealthRecords;