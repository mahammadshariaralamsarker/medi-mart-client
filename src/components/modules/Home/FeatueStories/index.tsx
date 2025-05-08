import React from 'react';
import Image from 'next/image';
import GeneticTesting from '../../../../../public/1800ss_medical_images_rf_researcher_trialing_medical_drug_ampule.webp';
import Restoration from '../../../../../public/1800x1200_doctor_inspecting_mature_womans_knee_other.webp';
import diet from '../../../../../public/1800ss_getty_rf_holding_clementine_slice.webp';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
const data = [
  {
    title: "Decoding Your DNA: What Genetic Testing Reveals",
    subtitle: "In this podcast, Dr. Huma Q. Rana breaks down genetic testing, its benefits, and what the results could mean for your health and your family.",
    image: GeneticTesting,
  },
  {
    title: "Why Cartilage Restoration Might Delay Your Knee Replacement",
    subtitle: "Knee replacement relieves severe pain but doesn’t last forever. Cartilage restoration could be an option -- here's what to know.",
    image: Restoration,
  },
  {
    title: "How The Portfolio Diet Reduces Cholesterol Levels",
    subtitle: "The Portfolio Diet focuses on lowering cholesterol, not weight loss. Discover the cholesterol-fighting foods to include in your diet.",
    image: diet,
  },
];

const FeatureStories = () => {
  return (
    <section className="px-6 py-10">
     <SectionTitle sectionSubTitle='Explore Our Feature Stories' sectionTitle='Featured Stories'/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded shadow overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureStories;
