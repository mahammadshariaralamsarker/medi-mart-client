"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <section className=" relative bg-[url(https://res.cloudinary.com/dhfvwgwty/image/upload/v1740941927/doctor-wearing-medical-equipment-with-copy-space_sm6n76.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/20"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-xl text-center mx-auto">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Your Health our Priority
            <strong className="block font-extrabold text-primary">
              Fast Delivery
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Get medicines at your home within 30 minutes.
          </p>
          <div>
            <div className="relative mt-4">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                onChange={(e) =>
                  handleSearchQuery("searchTerm", e.target.value)
                }
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 focus:outline-none  py-2.5 pe-10 pl-2 shadow-xs sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>

          {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button> Shop Now</Button>
            <Button variant="secondary"> Learn More</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
