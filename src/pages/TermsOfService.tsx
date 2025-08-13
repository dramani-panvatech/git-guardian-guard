import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="position-relative">
      <Header />
      <main className='overflow-auto' style={{ marginTop: '76px' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary-600 mb-8" data-aos="fade-up">
              Terms of Service
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="prose prose-lg max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Acceptance of Terms</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    Welcome to Panva Technology. By accessing or using our website, services, or applications, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Use License</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license, you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to reverse engineer any software contained on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">User Responsibilities</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    You are responsible for complying with all local laws and regulations when using our services. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Unauthorized use of our services may result in legal action and termination of your access.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Service Availability</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    We strive to maintain the availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We are not liable for any interruption or loss of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibent text-secondary-800 mb-4">Intellectual Property</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    All content, features, and functionality of our services are owned by Panva Technology and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Limitation of Liability</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    In no event shall Panva Technology be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Governing Law</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of the State of California, United States. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in San Diego County, California.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Changes to Terms</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    We may update these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Contact Information</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    <a href="mailto:support@panvatech.com" className="text-primary-600 hover:text-primary-700 underline">
                      support@panvatech.com
                    </a>
                    {' '}or call us at{' '}
                    <a href="tel:1-800-916-2459" className="text-primary-600 hover:text-primary-700 underline">
                      1-800-916-2459
                    </a>.
                  </p>
                  <p className="text-sm text-secondary-500 mt-4">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;