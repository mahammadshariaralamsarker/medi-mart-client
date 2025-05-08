'use client';

import Image from "next/image";

const MoreInfoPage = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 relative h-64">
            <Image 
              src="https://images.pexels.com/photos/5726709/pexels-photo-5726709.jpeg" 
              alt="Health updates"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empower Your Health Journey with <span className="text-blue-600">Medimart</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get medically-verified insights, prescription reminders, and exclusive offers 
              straight to your inbox. Your health deserves expert attention.
            </p>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {icon: '🏥', title: 'Expert-Curated Content', text: 'Content verified by medical professionals'},
            {icon: '⏰', title: 'Medication Reminders', text: 'Never miss a dose with smart alerts'},
            {icon: '🔒', title: 'Data Privacy', text: 'Your information stays 100% secure'},
            {icon: '🎁', title: 'Exclusive Offers', text: 'Special discounts for subscribers'},
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join 50,000+ Health-Conscious Subscribers</h2>
            <p className="text-lg mb-8 opacity-90">
              Sign up now and receive our exclusive guide to &quot;10 Daily Habits for Better Health&quot; (FREE)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-[1.02]">
                Get Health Insights
              </button>
            </div>

            <p className="text-sm mt-4 opacity-75">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-75">
          <div className="relative w-32 h-12">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=128"
              fill
              className="object-contain"
              alt="Certified"
            />
          </div>
          <div className="relative w-32 h-12">
            <Image 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=128"
              fill
              className="object-contain"
              alt="HIPAA Compliant"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl">⭐</span>
            <span className="text-gray-600">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;