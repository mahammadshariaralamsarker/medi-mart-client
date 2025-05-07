import  { ReactNode } from 'react'

const MyContainer = ({ children }: { children:ReactNode }) => {
  return (
    <div className="lg:w-[90%] sm:w-full md:w-[90%]  mx-auto px-4 md:px-0  sm:mt-5 md:mt-14 lg:mt-6">
      {children}
    </div>
  );
};

export default MyContainer
