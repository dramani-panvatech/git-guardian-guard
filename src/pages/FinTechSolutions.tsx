import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CreditCard, BarChart3, Lock, Globe, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FinTechSolutions = () => {
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
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-auto" style={{ marginTop: '76px' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" data-aos="fade-right">
            <button
              onClick={() => navigate('/it-solutions')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to IT Solutions
            </button>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              FinTech Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Revolutionary financial technology solutions that modernize banking, payments, and financial services 
              with cutting-edge security and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Banking Solutions */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
                <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-20 h-20">
                  <CreditCard size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Banking Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Modern banking platforms for seamless financial transactions and account management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Mobile banking apps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Payment processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Account management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Security protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Financial Analytics */}
            <div data-aos="fade-up" data-aos-delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-20 h-20">
                  <BarChart3 size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Financial Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced analytics and reporting for financial institutions and businesses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Risk assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Portfolio management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Real-time reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Predictive modeling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FinTech Security */}
            <div data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-red-500">
                <div className="flex items-center justify-center mb-6 bg-red-50 rounded-2xl w-20 h-20">
                  <Lock size={48} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">FinTech Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade security solutions for financial technology platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Fraud detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Identity verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Encryption protocols</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blockchain Solutions */}
            <div data-aos="fade-up" data-aos-delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-yellow-500">
                <div className="flex items-center justify-center mb-6 bg-yellow-50 rounded-2xl w-20 h-20">
                  <Globe size={48} className="text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Blockchain Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Innovative blockchain technology for secure and transparent financial transactions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Smart contracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Cryptocurrency integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Distributed ledger</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Cross-border payments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinTechSolutions;