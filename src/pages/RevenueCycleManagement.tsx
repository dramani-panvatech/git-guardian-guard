import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Shield, 
  CreditCard, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  DollarSign,
  FileText,
  Clock,
  BarChart3,
  Users,
  TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RevenueCycleManagement = () => {
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
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 lg:py-32" style={{ marginTop: '76px' }}>
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
                Revenue Cycle Management
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Streamlined revenue cycle management solutions to optimize your healthcare 
                billing and collections while ensuring compliance and maximizing revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-green-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Features
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <Shield size={120} className="text-green-300 mb-6 mx-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Revenue Optimization</h3>
                  <p className="text-green-100">Complete billing and collections management</p>
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
              Comprehensive revenue cycle management with automated processes and real-time insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText size={48} />,
                title: "Claims Management",
                description: "Automated claims processing with real-time status tracking and error detection",
                color: "green"
              },
              {
                icon: <CreditCard size={48} />,
                title: "Payment Processing",
                description: "Streamlined payment workflows with multiple payment options and automated reconciliation",
                color: "blue"
              },
              {
                icon: <Users size={48} />,
                title: "Patient Billing Support",
                description: "Comprehensive patient billing portal with transparent pricing and payment plans",
                color: "purple"
              },
              {
                icon: <Shield size={48} />,
                title: "Compliance Tracking",
                description: "Real-time compliance monitoring ensuring adherence to healthcare regulations",
                color: "red"
              },
              {
                icon: <BarChart3 size={48} />,
                title: "Financial Analytics",
                description: "Advanced reporting and analytics for revenue optimization and performance tracking",
                color: "yellow"
              },
              {
                icon: <TrendingUp size={48} />,
                title: "Denial Management",
                description: "Intelligent denial management system with automated appeals and resubmission",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-green-500 hover:-translate-y-1">
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
              Financial Performance Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our revenue cycle management solution delivers measurable financial improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "45%", label: "Increase in Collection Rates" },
              { number: "30%", label: "Reduction in Claim Denials" },
              { number: "20%", label: "Faster Payment Processing" },
              { number: "99%", label: "Billing Accuracy Achieved" }
            ].map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-center bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
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
                Maximize Your Revenue Potential
              </h2>
              <div className="space-y-6">
                {[
                  "Automated claims processing and submission",
                  "Real-time eligibility verification",
                  "Advanced denial management system",
                  "Patient payment portal integration",
                  "Comprehensive financial analytics dashboard",
                  "Regulatory compliance monitoring"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6">Optimize Your Revenue Cycle</h3>
                <p className="text-xl mb-8 text-green-100">
                  Transform your billing operations and maximize revenue with our comprehensive RCM solution.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-green-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
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

export default RevenueCycleManagement;