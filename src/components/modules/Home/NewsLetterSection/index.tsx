import Image from "next/image";
import hp from "../../../../../public/hp-nl-envelop.png";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const NewsletterSection = () => {
  return (
    <div className="w-[95%] max-w-9xl mx-auto mt-10">
      <SectionTitle
        sectionSubTitle="Stay updated with our latest news!"
        sectionTitle="Free Medimart Newsletters"
      />
      <section className="bg-blue-900 text-white px-4 sm:px-6 md:px-10 py-10 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Free WebMD Newsletters
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Doctor-approved health and wellness information delivered to your inbox.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                Daily Updates
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                Women&apos;s Health
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                Good Health
              </label>
            </div>

            <div className="flex flex-col sm:flex-row w-full max-w-md mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-black rounded-t-md sm:rounded-l-md sm:rounded-tr-none"
              />
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none font-semibold">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              By clicking Subscribe, I agree to the WebMD{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>

            <button className="mt-2 border border-white px-4 py-2 rounded text-white font-semibold text-sm sm:text-base">
              See All WebMD Newsletters
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <Image
              src={hp}
              alt="Newsletter Illustration"
              width={350}
              height={300}
              className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
