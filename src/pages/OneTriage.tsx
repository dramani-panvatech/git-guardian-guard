import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Heart, 
  Brain, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Zap,
  Users,
  Clock,
  FileText,
  Smartphone,
  BarChart3
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OneTriage = () => {
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
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 lg:py-32" style={{ marginTop: '76px' }}>
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
                One Triage
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                AI-powered automated document collection and verification system with intelligent 
                patient triage and personalized onboarding workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Features
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <Heart size={120} className="text-red-300 mb-6 mx-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Smart Triage System</h3>
                  <p className="text-red-100">AI-driven patient prioritization and workflow automation</p>
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
              Revolutionary AI-powered triage system that transforms patient onboarding and care delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain size={48} />,
                title: "AI-Driven Patient Triage",
                description: "Machine learning algorithms assess patient risk and prioritize care based on symptoms and medical history",
                color: "red"
              },
              {
                icon: <Zap size={48} />,
                title: "Intelligent Workflow Automation",
                description: "Automated document verification and routing to appropriate healthcare providers",
                color: "blue"
              },
              {
                icon: <Users size={48} />,
                title: "Personalized Patient Onboarding",
                description: "Customized onboarding experience based on patient type and medical requirements",
                color: "green"
              },
              {
                icon: <Smartphone size={48} />,
                title: "Mobile Patient Portal",
                description: "User-friendly mobile app for patient check-in and real-time status updates",
                color: "purple"
              },
              {
                icon: <FileText size={48} />,
                title: "Automated Document Processing",
                description: "AI-powered document scanning, verification, and digital form completion",
                color: "yellow"
              },
              {
                icon: <BarChart3 size={48} />,
                title: "Predictive Analytics",
                description: "Real-time queue management with predictive wait time estimation",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-red-500 hover:-translate-y-1">
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how One Triage has transformed healthcare operations for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "60%", label: "Faster Patient Processing" },
              { number: "35%", label: "Reduction in Wait Times" },
              { number: "90%", label: "Accuracy in Risk Prediction" },
              { number: "50%", label: "Decrease in Manual Paperwork" }
            ].map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
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
                Transform Your Emergency Department
              </h2>
              <div className="space-y-6">
                {[
                  "Machine learning patient risk assessment",
                  "Automated document verification",
                  "Real-time queue management",
                  "Predictive wait time estimation",
                  "Mobile patient check-in",
                  "Streamlined provider workflows"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6">Ready to Revolutionize Patient Care?</h3>
                <p className="text-xl mb-8 text-red-100">
                  Discover how One Triage can streamline your emergency department operations and improve patient outcomes.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
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

export default OneTriage;