import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mic, FileText, Edit3, FileCheck, CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HealthCoder = () => {
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
              Health Coder
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              AI-powered healthcare documentation and coding solution that transforms how medical professionals 
              capture, process, and code patient encounters.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI-Driven Real-Time Transcription */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
                <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-20 h-20">
                  <Mic size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Driven Real-Time Transcription</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced AI technology that accurately transcribes medical conversations in real-time with medical terminology recognition.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Medical terminology accuracy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Multi-speaker recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Real-time processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">HIPAA compliant</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Seamless Meeting Summaries */}
            <div data-aos="fade-up" data-aos-delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-20 h-20">
                  <FileText size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Seamless Meeting Summaries</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically generates comprehensive meeting summaries with key points, decisions, and action items.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Key points extraction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Action item identification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Decision tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated distribution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contextual Editing & Customization */}
            <div data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-purple-500">
                <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-2xl w-20 h-20">
                  <Edit3 size={48} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Contextual Editing & Customization</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intelligent editing tools that understand medical context and allow for easy customization of documentation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Medical context awareness</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Smart suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Template customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quick corrections</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Driven SOAP Notes */}
            <div data-aos="fade-up" data-aos-delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-red-500">
                <div className="flex items-center justify-center mb-6 bg-red-50 rounded-2xl w-20 h-20">
                  <FileCheck size={48} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Driven SOAP Notes</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically structures patient encounters into proper SOAP note format with clinical accuracy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">SOAP format automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Clinical terminology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">EHR integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Driven Billing Coding */}
            <div data-aos="fade-up" data-aos-delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-yellow-500 lg:col-span-2">
                <div className="flex items-center justify-center mb-6 bg-yellow-50 rounded-2xl w-20 h-20">
                  <CreditCard size={48} className="text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Driven Billing Coding</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intelligent coding system that automatically generates appropriate billing codes from clinical documentation.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">ICD-10 code generation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">CPT code automation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Compliance verification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Revenue optimization</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Audit trail maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Denial reduction</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Real-time validation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Coding accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthCoder;