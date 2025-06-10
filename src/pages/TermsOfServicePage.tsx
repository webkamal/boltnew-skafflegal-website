import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="termsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#termsGrid)" />
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
              Terms of Service
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              These terms govern your use of our website and legal services. Please read them carefully.
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Legal Terms</h3>
                  <p className="text-neutral-600 text-sm">Comprehensive terms governing our legal services.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <Scale className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Professional Standards</h3>
                  <p className="text-neutral-600 text-sm">We adhere to the highest professional and ethical standards.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Limitations</h3>
                  <p className="text-neutral-600 text-sm">Important limitations and disclaimers you should know.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Your Rights</h3>
                  <p className="text-neutral-600 text-sm">Understanding your rights and responsibilities as our client.</p>
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

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">1. Acceptance of Terms</h2>
                <p className="text-neutral-700 mb-6">
                  By accessing and using the website of Skaff Legal Pty Ltd (ABN: [ABN Number]) or engaging our legal services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">2. Legal Services</h2>
                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">2.1 Scope of Services</h3>
                <p className="text-neutral-700 mb-4">
                  Skaff Legal provides legal services in the following areas:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Visa and Immigration Law</li>
                  <li>Property and Conveyancing</li>
                  <li>Personal Legal Services</li>
                  <li>Family Law</li>
                  <li>Wills and Estate Planning</li>
                  <li>General Legal Advice</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">2.2 Professional Standards</h3>
                <p className="text-neutral-700 mb-6">
                  We are bound by the Legal Profession Uniform Law, the Legal Profession Uniform Conduct (Barristers) Rules, the Legal Profession Uniform Conduct (Solicitors) Rules, and other applicable professional standards and regulations in Australia.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">3. Client Relationship</h2>
                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">3.1 Retainer Agreement</h3>
                <p className="text-neutral-700 mb-6">
                  A formal solicitor-client relationship is established only upon execution of a written retainer agreement. Initial consultations and general information provided through our website do not create a solicitor-client relationship.
                </p>

                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">3.2 Confidentiality</h3>
                <p className="text-neutral-700 mb-6">
                  We maintain strict confidentiality regarding all client information in accordance with legal professional privilege and our professional obligations. This confidentiality extends beyond the termination of our services.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">4. Fees and Payment</h2>
                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">4.1 Fee Structure</h3>
                <p className="text-neutral-700 mb-4">Our fees may be charged on the following basis:</p>
                <ul className="list-disc pl-6 mb-6 text-neutral-700">
                  <li>Fixed fees for specific services</li>
                  <li>Hourly rates for time-based services</li>
                  <li>Contingency fees where permitted by law</li>
                  <li>Disbursements and third-party costs</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">4.2 Payment Terms</h3>
                <p className="text-neutral-700 mb-6">
                  Payment terms will be specified in your retainer agreement. Generally, fees are payable within 30 days of invoice date. We reserve the right to charge interest on overdue accounts and to cease work until outstanding fees are paid.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">5. Limitation of Liability</h2>
                <p className="text-neutral-700 mb-6">
                  To the maximum extent permitted by law, our liability is limited to the amount of fees paid by you for the specific service in question. We exclude liability for indirect, consequential, or special damages. Our liability is limited by a scheme approved under Professional Standards Legislation.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">6. Website Use</h2>
                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">6.1 General Information</h3>
                <p className="text-neutral-700 mb-6">
                  Information on our website is general in nature and does not constitute legal advice. You should not rely on website content for specific legal matters without seeking professional advice tailored to your circumstances.
                </p>

                <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">6.2 Intellectual Property</h3>
                <p className="text-neutral-700 mb-6">
                  All content on our website, including text, graphics, logos, and software, is our property or that of our licensors and is protected by copyright and other intellectual property laws.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">7. Privacy and Data Protection</h2>
                <p className="text-neutral-700 mb-6">
                  We collect, use, and protect your personal information in accordance with our Privacy Policy and the Privacy Act 1988 (Cth). By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">8. Complaints and Disputes</h2>
                <p className="text-neutral-700 mb-6">
                  If you have a complaint about our services, please contact us directly. If the matter cannot be resolved, you may refer the complaint to the Legal Services Commissioner or other appropriate regulatory body in your jurisdiction.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">9. Termination</h2>
                <p className="text-neutral-700 mb-6">
                  Either party may terminate the solicitor-client relationship in accordance with the terms of the retainer agreement and applicable professional rules. We reserve the right to terminate our services if fees remain unpaid or if there is a conflict of interest.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">10. Governing Law</h2>
                <p className="text-neutral-700 mb-6">
                  These terms are governed by the laws of New South Wales, Australia. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts of New South Wales.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">11. Changes to Terms</h2>
                <p className="text-neutral-700 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modifications.
                </p>

                <h2 className="font-serif text-2xl font-semibold mb-4 text-neutral-900">12. Contact Information</h2>
                <p className="text-neutral-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-neutral-700 mb-2"><strong>Skaff Legal Pty Ltd</strong></p>
                  <p className="text-neutral-700 mb-2">Email: info@skafflegal.com</p>
                  <p className="text-neutral-700 mb-2">Phone: 0416 453 722</p>
                  <p className="text-neutral-700">Address: P.O Box 5029 Greystanes NSW</p>
                </div>

                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 mt-8">
                  <p className="text-neutral-700 font-medium">
                    <strong>Important Notice:</strong> Liability Limited By A Scheme Approved Under Professional Standards Legislation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;