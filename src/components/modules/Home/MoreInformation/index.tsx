const MoreInfoPage = () => {
  return (
    <div className="w-full max-w-9xl mx-auto pt-8 px-6 sm:px-8  ">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">
          Stay Informed with Medimart Newsletters
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Stay on top of your health with expert-reviewed updates, wellness
          tips, and advice for managing chronic conditions—delivered right to
          your inbox.
        </p>
      </div>

      {/* Bullet Points */}
      <div className="my-4 max-w-2xl mx-auto space-y-4 text-center">
        <ul className="space-y-4 text-gray-700 text-base ">
          {[
            "Doctor-reviewed articles and health tips",
            "Personalized content tailored to your health needs",
            "No spam – just quality health insights",
            "Effortless unsubscribe anytime",
          ].map((text, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-600 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-.707 1.707H11v6a1 1 0 01-2 0V8H7.707a1 1 0 01-.707-1.707l3-3A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe Button */}
      <div className="text-center">
        <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-xl shadow-lg hover:bg-blue-800 transform transition duration-300 hover:scale-105">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default MoreInfoPage;
