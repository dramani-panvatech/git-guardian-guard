import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Brain, Cpu, Network, BarChart3, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIMachineLearning = () => {
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
              AI & Machine Learning
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Intelligent solutions that leverage artificial intelligence and machine learning to automate processes, 
              gain insights, and drive innovation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Machine Learning Models */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-purple-500">
                <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-2xl w-20 h-20">
                  <Brain size={48} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Machine Learning Models</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom ML models for predictive analytics and intelligent decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Predictive modeling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Data analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Pattern recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated insights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Powered Automation */}
            <div data-aos="fade-up" data-aos-delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
                <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-20 h-20">
                  <Cpu size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Automation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intelligent automation solutions to streamline business processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Process automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Workflow optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Intelligent routing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
                <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-20 h-20">
                  <Network size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Natural Language Processing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced NLP solutions for text analysis and language understanding.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Text analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sentiment analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Language translation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Chatbot development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Computer Vision */}
            <div data-aos="fade-up" data-aos-delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-orange-500">
                <div className="flex items-center justify-center mb-6 bg-orange-50 rounded-2xl w-20 h-20">
                  <BarChart3 size={48} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Computer Vision</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Image and video analysis solutions for visual data processing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Image recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Object detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Video analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quality control</span>
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

export default AIMachineLearning;