import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="prose prose-lg max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Information We Collect</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    At Panva Technology, we are committed to protecting your privacy. We collect information that you provide directly to us and automatically through our services. This may include personal information such as your name, email address, phone number, and company information when you contact us or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">How We Use Your Information</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, communicate with you about our services, respond to your inquiries, and comply with legal obligations. We may also use your information to send you technical notices, updates, security alerts, and administrative messages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Information Sharing</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    Your data will never be sold or shared with third parties without your explicit consent, except as required by law or to protect our rights and the safety of our users. We may share information with service providers who assist us in operating our business, but they are bound by confidentiality agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Data Security</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Your Rights</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Contact Us</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at{' '}
                    <a href="mailto:support@panvatech.com" className="text-primary-600 hover:text-primary-700 underline">
                      support@panvatech.com
                    </a>
                    {' '}or call us at{' '}
                    <a href="tel:1-800-916-2459" className="text-primary-600 hover:text-primary-700 underline">
                      1-800-916-2459
                    </a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Updates to This Policy</h2>
                  <p className="text-secondary-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
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

export default PrivacyPolicy;