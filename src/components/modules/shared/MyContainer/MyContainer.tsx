import  { ReactNode } from 'react'

const MyContainer = ({ children }: { children:ReactNode }) => {
  return (
    <div className="lg:w-[90%] sm:w-full md:w-[90%]  mx-auto px-4 md:px-0 mt-12 md:mt-16">
      {children}
    </div>
  );
};

export default MyContainer
