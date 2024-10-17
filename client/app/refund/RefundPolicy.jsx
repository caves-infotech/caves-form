// src/components/RefundPolicy.js
import React from 'react';
import { FaShieldAlt, FaRegFileAlt, FaExclamationTriangle } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <div className="font-semibold max-w-7xl mx-auto p-6 bg-gradient-to-r rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4">Refund Policy</h1>
      <p className="mb-4 text-center text-gray-600">Last updated: 16 Oct 2024</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaShieldAlt className="text-black mr-2" />
        Refund Policy
      </h2>
      <p className="mb-4 text-gray-600">
        All payments made on www.udcprs.com are for the use of our simplified calculation tools and other services related to the Unified Development Control and Promotion Regulations (UDCPR) 2024 for Maharashtra State. However, please note that this payment is independent of UDCPR or any government body and does not involve any official fees or charges related to government services or regulations. By proceeding with an online or offline payment, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaRegFileAlt className="text-black mr-2" />
        Online Payments Only
      </h2>
      <p className="mb-4 text-gray-600">
        www.udcprs.com accepts payments exclusively through online payment gateways. We do not accept cash, checks, or other forms of direct payment. The details of the online payment process, including accepted payment methods, will be provided during the transaction process.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaExclamationTriangle className="text-black mr-2" />
        No Refund Policy
      </h2>
      <p className="mb-4 text-gray-600">
        Please note that all payments made on www.udcprs.com are non-refundable. Once the payment is processed and access to the tools or services is granted, we do not offer any refunds, cancellations, or returns. This policy applies to all fees and charges for the services provided on our platform, including but not limited to subscriptions, one-time fees, and other service-related payments.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaShieldAlt className="text-black mr-2" />
        Service Usage
      </h2>
      <p className="mb-4 text-gray-600">
        Before making a payment, we encourage users to carefully review the services and tools provided on www.udcprs.com. In case of any queries or clarifications about the services, please contact us at support@udcprs.com before proceeding with the payment.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaExclamationTriangle className="text-black mr-2" />
        Payment Issues
      </h2>
      <p className="mb-4 text-gray-600">
        In the event of a payment failure or any technical issues related to the online payment process, please reach out to us immediately at support@udcprs.com with your payment details. We will work to resolve the issue as quickly as possible but will not be responsible for any third-party payment gateway errors or delays.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 flex items-center">
        <FaRegFileAlt className="text-black mr-2" />
        Contact Information
      </h2>
      <p className="mb-4 text-gray-600">
        For further inquiries regarding our payment and refund policy, you can contact us at:
      </p>
      <p className="mb-4 text-gray-600">
        Email: support@udcprs.com<br />
        Phone: [Insert Phone Number]
      </p>
    </div>
  );
};

export default RefundPolicy;
