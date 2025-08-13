import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText, Scale, Search, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalServicePlatform = () => {
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
              Legal Service Platform
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Comprehensive legal technology solutions that streamline legal processes, 
              enhance client communication, and improve case management efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Legal Document Management */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
                <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-20 h-20">
                  <FileText size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Legal Document Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive document management system for legal professionals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Document automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Contract management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Version control</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Secure storage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Management System */}
            <div data-aos="fade-up" data-aos-delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-20 h-20">
                  <Scale size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Case Management System</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Integrated case management platform for law firms and legal departments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Case tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Client management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Calendar integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Billing automation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Research Tools */}
            <div data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-purple-500">
                <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-2xl w-20 h-20">
                  <Search size={48} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Legal Research Tools</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced research and analysis tools for legal professionals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Case law search</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Legal analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Citation tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Research automation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Portal */}
            <div data-aos="fade-up" data-aos-delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-yellow-500">
                <div className="flex items-center justify-center mb-6 bg-yellow-50 rounded-2xl w-20 h-20">
                  <Users size={48} className="text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Client Portal</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure client portal for document sharing and communication.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Secure messaging</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Document sharing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Status updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Payment processing</span>
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

export default LegalServicePlatform;