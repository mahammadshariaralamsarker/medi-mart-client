// app/blog/page.jsx
import Image from "next/image";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";

const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920')] opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Health Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">Expert advice and wellness tips</p>
        </div>
      </header>

      <MyContainer>
        {/* Featured Articles */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Managing Seasonal Allergies",
                excerpt: "Learn how to combat spring allergies with these expert tips",
                category: "Wellness",
                date: "May 15, 2023",
                img: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg"
              },
              {
                title: "The Importance of Medication Adherence",
                excerpt: "Why taking your medicines as prescribed matters",
                category: "Medication",
                date: "April 28, 2023",
                img: "https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg"
              },
              {
                title: "Boosting Your Immune System Naturally",
                excerpt: "Foods and habits that strengthen your immunity",
                category: "Nutrition",
                date: "April 10, 2023",
                img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              },
              {
                title: "Understanding Blood Pressure Readings",
                excerpt: "A guide to what your numbers really mean",
                category: "Health",
                date: "March 22, 2023",
                img: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              },
              {
                title: "Diabetes Management Tips",
                excerpt: "Daily practices for better blood sugar control",
                category: "Chronic Conditions",
                date: "March 15, 2023",
                img: "https://images.pexels.com/photos/6129107/pexels-photo-6129107.jpeg"
              },
              {
                title: "The Benefits of Regular Exercise",
                excerpt: "How physical activity improves overall health",
                category: "Fitness",
                date: "February 28, 2023",
                img: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-teal-600">{article.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 my-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-blue-50 rounded-lg mb-16">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Health Newsletter</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Subscribe to receive monthly health tips and pharmacy updates
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-teal-600 text-white px-6 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </MyContainer>
    </div>
  );
};

export default BlogPage;