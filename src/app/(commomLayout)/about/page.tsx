import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920')] opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Medi Mart</h1>
          <p className="text-xl max-w-2xl mx-auto">Your trusted partner in health and wellness</p>
          <div className="mt-6">
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 relative h-96">
              <Image
                src="https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg"
                alt="Pharmacy team"
                fill
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                At Medi Mart, our mission is to provide exceptional healthcare products and services that enhance 
                our customers' quality of life. We believe in accessibility, reliability, and compassionate care.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-700">Integrity</h3>
                  <p className="text-gray-600 mt-2">Honest and ethical in all our dealings</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-700">Care</h3>
                  <p className="text-gray-600 mt-2">Putting our customers' health first</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-xl font-bold text-teal-700">Expertise</h3>
                  <p className="text-gray-600 mt-2">Professional advice from qualified staff</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-700">Community</h3>
                  <p className="text-gray-600 mt-2">Supporting local health initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <MyContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-green-600">5000+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-teal-600">100+</h3>
              <p className="text-gray-600 mt-2">Healthcare Products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-purple-600">24/7</h3>
              <p className="text-gray-600 mt-2">Online Support</p>
            </div>
          </div>
        </MyContainer>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <MyContainer>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To become the most trusted healthcare provider in our community, offering innovative solutions
              and personalized care that makes a meaningful difference in people's lives.
            </p>
          </div>
        </MyContainer>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Medicine Categories</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Prescription Medicines",
                img: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg",
                bg: "bg-blue-50"
              },
              {
                title: "Wellness Products",
                img: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg",
                bg: "bg-green-50"
              },
              {
                title: "Medical Equipment",
                img: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg",
                bg: "bg-purple-50"
              },
              {
                title: "Personal Care",
                img: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
                bg: "bg-teal-50"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bg} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow`}>
                <div className="relative h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Medi Mart?</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "Licensed Pharmacy",
                desc: "All our medicines are dispensed by licensed pharmacists"
              },
              {
                icon: "💊",
                title: "Genuine Medicines",
                desc: "100% authentic products from trusted manufacturers"
              },
              {
                icon: "💰",
                title: "Affordable Prices",
                desc: "Competitive pricing without compromising quality"
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                desc: "Same-day delivery for urgent prescriptions"
              },
              {
                icon: "👩‍⚕️",
                title: "Expert Advice",
                desc: "Consult our pharmacists for free health advice"
              },
              {
                icon: "🔄",
                title: "Easy Refills",
                desc: "Automatic prescription refill reminders"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Pharmacist",
                img: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg"
              },
              {
                name: "Michael Chen",
                role: "Pharmacy Manager",
                img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
              },
              {
                name: "Emily Rodriguez",
                role: "Senior Pharmacist",
                img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              },
              {
                name: "David Wilson",
                role: "Customer Care",
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-teal-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>
    </div>
  );
};

export default AboutUsPage;