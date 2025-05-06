import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";

const AboutUsPage = () => {
  return (
    <div className="bg-white mt-5">
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-3xl lg:text-4xl font-bold">About Us - Medi Mart</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide the best healthcare products and services to
          our customers, enhancing their quality of life.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Our goal is to inspire everyone to lead a healthy life and ensure
          their well-being through modern healthcare equipment.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <MyContainer>
          <h2 className="text-2xl font-bold">Our Medicine Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Medicine & Health Products</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Fitness Equipment</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Personal Care Items</h3>
            </div>

            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Supplements and Nutrition</h3>
            </div>
          </div>
        </MyContainer>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Quality Assurance</h3>
            <p className="text-gray-700 mt-2">
              We provide only high-quality healthcare products.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Customer Support</h3>
            <p className="text-gray-700 mt-2">
              Our support team is always ready to assist you.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Wide Range of Products</h3>
            <p className="text-gray-700 mt-2">
              We offer all essential products for health and wellness.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Affordable Prices</h3>
            <p className="text-gray-700 mt-2">
              We provide the best prices for our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
