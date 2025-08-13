import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Database, 
  Video, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Monitor,
  Smartphone,
  Calendar,
  FileText,
  Shield,
  Globe
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TelemedicinePlatforms = () => {
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
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20 lg:py-32" style={{ marginTop: '76px' }}>
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
                Telemedicine Platforms
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Secure video consultation and remote patient monitoring solutions that connect 
                healthcare providers with patients anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Features
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <Database size={120} className="text-purple-300 mb-6 mx-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Virtual Healthcare</h3>
                  <p className="text-purple-100">Connecting patients and providers remotely</p>
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
              Comprehensive telemedicine platform with advanced features for modern healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video size={48} />,
                title: "Video Consultations",
                description: "High-definition video calls with secure, HIPAA-compliant communication channels",
                color: "purple"
              },
              {
                icon: <Monitor size={48} />,
                title: "Remote Patient Monitoring",
                description: "Real-time health data monitoring with IoT device integration and alerts",
                color: "blue"
              },
              {
                icon: <FileText size={48} />,
                title: "Prescription Management",
                description: "Digital prescription management with electronic pharmacy integration",
                color: "green"
              },
              {
                icon: <Calendar size={48} />,
                title: "Appointment Scheduling",
                description: "Integrated scheduling system with automated reminders and calendar sync",
                color: "red"
              },
              {
                icon: <Smartphone size={48} />,
                title: "Patient Portal",
                description: "Mobile-friendly patient portal for accessing health records and communications",
                color: "yellow"
              },
              {
                icon: <Shield size={48} />,
                title: "Security & Compliance",
                description: "End-to-end encryption ensuring HIPAA compliance and data protection",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-purple-500 hover:-translate-y-1">
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

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Platform Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our telemedicine platform delivers exceptional results for healthcare providers and patients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Healthcare Providers" },
              { number: "50,000+", label: "Consultations Completed" },
              { number: "95%", label: "Patient Satisfaction Rate" },
              { number: "80%", label: "Reduction in No-Shows" }
            ].map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Transform Healthcare Delivery
              </h2>
              <div className="space-y-6">
                {[
                  "HD video consultations with crystal-clear audio",
                  "IoT device integration for vital signs monitoring",
                  "Digital prescription management and pharmacy integration",
                  "Automated appointment scheduling and reminders",
                  "Comprehensive patient health records access",
                  "Multi-platform support (web, mobile, tablet)"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6">Ready to Go Virtual?</h3>
                <p className="text-xl mb-8 text-purple-100">
                  Expand your healthcare reach and improve patient access with our comprehensive telemedicine platform.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
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

export default TelemedicinePlatforms;