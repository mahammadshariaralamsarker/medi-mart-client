import React from 'react';
import Image from 'next/image';
import BreastCancerImg from '../../../../../public/BreastCancer3_share_featured.jpg';
import SleepImg from '../../../../../public/1800x1200_man_wearing_cpap_sleeping_beside_wife_in_bed_other (1).webp';
import LookAtObesity from '../../../../../public/1800x1200-weight-gain-while-treating-hiv-spanish-ref-guide.webp';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
const data = [
  {
    title: "Stories Of Cancer Prevention",
    subtitle: "Spotlight on Cancer Prevention",
    description:
      "John Whyte, MD, dives into the latest screenings and healthy habits to reduce cancer risk. Learn how small changes can make a big impact on your health.",
      image: BreastCancerImg
  },
  {
    title: "A New Way To Look At Obesity",
    subtitle: "Content on Weight Loss and Obesity",
    description:
      "Uncover a fresh take on obesity management, from modest weight loss benefits to the latest treatments and tips for reaching your goals.",
    image: LookAtObesity,
  },
  {
    title: "Treating Your Sleep Apnea",
    subtitle: "Spotlight on Sleep Apnea",
    description:
      "Sleep apnea could strain your health and wallet, but the right diagnosis and treatment can help. Learn the signs, explore your options, and sleep easier.",
    image: SleepImg
  },
];

const SpecialSection = () => {
  return (
    <section className="px-6 py-10">
      <SectionTitle sectionTitle="Special Section" sectionSubTitle='Explore our featured stories'/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden group">
              <Image
              src={item.image}
              alt={item.title}
              height={224}
              width={224}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{item.subtitle}</p>
              <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialSection;
