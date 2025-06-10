import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="privacyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#privacyGrid)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Data Protection</h3>
                  <p className="text-neutral-600 text-sm">We implement robust security measures to protect your personal information.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Transparency</h3>
                  <p className="text-neutral-600 text-sm">We are transparent about what information we collect and how we use it.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Confidentiality</h3>
                  <p className="text-neutral-600 text-sm">Your information is kept strictly confidential and secure.</p>
                </div>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-neutral-600 mb-6">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">1. Introduction</h2>
                <p className="text-neutral-700 mb-6">
                  Skaff Legal Pty Ltd (ABN: [ABN Number]) ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services, in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">2. Information We Collect</h2>
                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">2.1 Personal Information</h3>
                <p className="text-neutral-700 mb-4">We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Contact details (name, email address, phone number, postal address)</li>
                  <li>Professional information (occupation, employer)</li>
                  <li>Legal matter details and case information</li>
                  <li>Financial information for billing purposes</li>
                  <li>Identification documents as required for legal services</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">2.2 Website Information</h3>
                <p className="text-neutral-700 mb-6">
                  When you visit our website, we may automatically collect technical information including your IP address, browser type, operating system, referring website, pages viewed, and time spent on our site. We use cookies and similar technologies to enhance your browsing experience.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">3. How We Use Your Information</h2>
                <p className="text-neutral-700 mb-4">We use your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Providing legal services and advice</li>
                  <li>Communicating with you about your legal matters</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our services and website functionality</li>
                  <li>Marketing our services (with your consent)</li>
                  <li>Maintaining professional indemnity insurance</li>
                </ul>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">4. Disclosure of Information</h2>
                <p className="text-neutral-700 mb-4">We may disclose your personal information to:</p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Third parties as necessary to provide legal services (courts, government agencies, other legal professionals)</li>
                  <li>Professional service providers (accountants, IT support, document management services)</li>
                  <li>Our professional indemnity insurers</li>
                  <li>Law enforcement agencies when required by law</li>
                  <li>Other parties with your explicit consent</li>
                </ul>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">5. Data Security</h2>
                <p className="text-neutral-700 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure storage systems, encrypted communications, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">6. Data Retention</h2>
                <p className="text-neutral-700 mb-6">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Legal files are typically retained for seven years after the completion of a matter, in accordance with professional requirements.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">7. Your Rights</h2>
                <p className="text-neutral-700 mb-4">Under the Privacy Act 1988 (Cth), you have the right to:</p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Make a complaint about our handling of your personal information</li>
                </ul>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">8. Third-Party Links</h2>
                <p className="text-neutral-700 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">9. Changes to This Policy</h2>
                <p className="text-neutral-700 mb-6">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">10. Contact Us</h2>
                <p className="text-neutral-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-neutral-700 mb-2"><strong>Skaff Legal Pty Ltd</strong></p>
                  <p className="text-neutral-700 mb-2">Email: info@skafflegal.com</p>
                  <p className="text-neutral-700 mb-2">Phone: 0416 453 722</p>
                  <p className="text-neutral-700">Address: P.O Box 5029 Greystanes NSW</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;