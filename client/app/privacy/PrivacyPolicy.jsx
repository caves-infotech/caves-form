// src/components/PrivacyPolicy.js
import React from 'react';
import { FaShieldAlt, FaRegFileAlt, FaCookie, FaExclamationTriangle } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className=" font-semibold max-w-7xl mx-auto p-6 bg-gradient-to-r rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center  mb-4">Privacy Policy</h1>
      <p className="mb-4 text-center text-gray-600">Last updated: 16 Oct 2024</p>
      <p className="mb-4 text-gray-600">
        Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaShieldAlt className="text-black mr-2" />
        Information We Collect
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="transition duration-300 text-gray-600 hover:text-black">
          <span className="font-semibold">Personal Information:</span> We may collect personal information such as your name, email address, and contact details when you create an account, subscribe to our services, or contact us for support.
        </li>
        <li className="transition duration-300 text-gray-600 hover:text-black">
          <span className="font-semibold">Non-Personal Information:</span> We collect non-personal data such as browser type, IP address, and usage patterns to help us improve our website and services.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaRegFileAlt className="text-black mr-2" />
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="transition duration-300 text-gray-600 hover:text-black">To provide, maintain, and improve the services offered on www.udcprs.com.</li>
        <li className="transition duration-300 text-gray-600 hover:text-black">To respond to customer inquiries and provide technical support.</li>
        <li className="transition duration-300 text-gray-600 hover:text-black">To send you information regarding updates, promotional offers, or news related to our services.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaExclamationTriangle className="text-black mr-2" />
        Data Security
      </h2>
      <p className="mb-4 text-gray-600 transition duration-300 hover:text-black">
        We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaCookie className="text-black mr-2" />
        Cookies
      </h2>
      <p className="mb-4 text-gray-600 transition duration-300 hover:text-black">
        www.udcprs.com uses cookies to enhance user experience and gather analytical data. You can choose to disable cookies through your browser settings, but doing so may limit some functionalities of the website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaRegFileAlt className="text-black mr-2" />
        Changes to This Policy
      </h2>
      <p className="mb-4 text-gray-600 transition duration-300 hover:text-black">
        We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and we encourage you to review the policy periodically.
      </p>

      {/* Terms of Use Section */}
      <h1 className="text-3xl font-bold mb-4 mt-8">Terms of Use</h1>
      <p className="mb-4 text-gray-600">
        Welcome to www.udcprs.com. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaRegFileAlt className="text-black mr-2" />
        Website Use
      </h2>
      <p className="mb-4 text-gray-600 transition duration-300 hover:text-black">
        UDCPRS provides simplified calculation tools for Maharashtra's Unified Development Control and Promotion Regulations (UDCPR) 2024. The content and tools provided on this website are for general information and commercial purposes only and do not constitute legal advice.
      </p>

      {/* Remaining sections omitted for brevity. Add similar styling to other sections as needed */}
      
      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaShieldAlt className="text-black mr-2" />
        Contact Us
      </h2>
      <p className="mb-4 text-gray-600 transition duration-300 hover:text-black">
        For any questions regarding these Terms of Use, please contact us at support@udcprs.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
