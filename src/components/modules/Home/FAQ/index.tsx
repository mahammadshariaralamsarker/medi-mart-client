'use client';
import { useState } from "react";

const faqs = [
  {
    question: "How often will I receive newsletters?",
    answer: "We send newsletters weekly to ensure you're always up-to-date without overwhelming your inbox.",
  },
  {
    question: "Can I unsubscribe at any time?",
    answer: "Absolutely. You can unsubscribe with a single click from any email you receive.",
  },
  {
    question: "Will my email address be shared?",
    answer: "No. We respect your privacy and never share your information with third parties.",
  },
  {
    question: "Are the articles medically reviewed?",
    answer: "Yes. All content is reviewed by certified medical professionals to ensure accuracy and reliability.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-300 py-4">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left text-lg font-semibold text-blue-900"
    >
      {question}
      <span className="text-blue-600 text-xl">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && <p className="mt-2 text-gray-700 text-base">{answer}</p>}
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-white py-16 px-6 sm:px-8 max-w-9xl mx-auto">
     
    
        {/* FAQ Section */}
        <div >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div> 
    </div>
  );
};

export default FAQPage;
