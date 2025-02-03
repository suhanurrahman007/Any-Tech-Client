"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const FormSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Helmet>
        <title>Success | Any Tech</title>
      </Helmet>
      <div className="text-center">
        <CheckCircle className="mx-auto text-green-500" size={100} />
        <h1 className="mt-4 text-2xl font-semibold text-green-400">
          Form submitted successfully!
        </h1>
        <p className="mt-2 text-gray-400 w-96">
          Thank you! The form has been submitted successfully. We will reply to
          you soon!
        </p>
        <button
          className="px-4 py-2 mt-6 text-sm font-medium text-gray-900 bg-green-400 rounded hover:bg-green-500"
          onClick={() => window.history.back()}
        >
          Go back
        </button>
        <p className="mt-16 lg:mt-40 text-sm text-gray-500">
          Create your own contact form at{" "}
          <a href="https://web3forms.com" className="underline text-green-400">
            Web3Forms
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormSuccess;
