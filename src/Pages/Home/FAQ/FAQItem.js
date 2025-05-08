import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-emerald-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <button
        className="flex justify-between items-center w-full p-5 text-left font-medium text-emerald-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-emerald-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-emerald-600" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 text-gray-600">{answer}</div>
      </div>
    </div>
  );
}

export default FAQItem;
