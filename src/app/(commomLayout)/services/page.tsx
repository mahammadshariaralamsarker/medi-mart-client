// app/services/page.jsx
import Image from "next/image";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920')] opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Comprehensive healthcare solutions for your needs</p>
        </div>
      </header>

      <MyContainer>
        {/* Main Services */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Healthcare Services</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prescription Filling",
                desc: "Fast and accurate prescription services with professional consultation",
                icon: "💊",
                img: "https://images.pexels.com/photos/5726709/pexels-photo-5726709.jpeg"
              },
              {
                title: "Health Screenings",
                desc: "Blood pressure, cholesterol, and glucose level testing",
                icon: "🩺",
                img: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              },
              {
                title: "Vaccinations",
                desc: "Flu shots and other essential vaccinations",
                icon: "💉",
                img: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg"
              },
              {
                title: "Medication Therapy",
                desc: "Personalized medication management plans",
                icon: "📋",
                img: "https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg"
              },
              {
                title: "Home Delivery",
                desc: "Convenient medication delivery to your doorstep",
                icon: "🚚",
                img: "https://images.pexels.com/photos/4397893/pexels-photo-4397893.jpeg"
              },
              {
                title: "Senior Care",
                desc: "Specialized services for elderly patients",
                icon: "👵",
                img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-12 bg-red-50 rounded-lg mb-16">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Emergency Services</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              For urgent medical needs, we provide emergency prescription services 24/7. 
              Call our emergency hotline for immediate assistance.
            </p>
            <div className="bg-white p-4 rounded-lg inline-block shadow-md">
              <p className="text-2xl font-bold text-red-600">📞 (123) 456-7890</p>
            </div>
          </div>
        </section>
      </MyContainer>
    </div>
  );
};

export default ServicesPage;