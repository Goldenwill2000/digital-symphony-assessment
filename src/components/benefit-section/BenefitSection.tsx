import "./BenefitSection.scss";
import Map from "../../assets/images/map.png";
import { useEffect, useState } from "react";
import BenefitCard from "../../widgets/benefit-card/BenefitCard";
import Wetlands from "../../assets/images/wetlands.png";
import Park from "../../assets/images/park.png";
import Highway from "../../assets/images/highway.png";
import Location from "../../assets/images/location.png";
import Element from "../../assets/images/element.png";
import * as Aos from "aos";

export default function BenefitSection() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const [benefits] = useState([
    {
      image: Park,
      title: "Central Park ",
      subTitle: "at your doorstep",
    },
    {
      image: Highway,
      title: "Easy Access to",
      subTitle: "major highways",
    },
    {
      image: Wetlands,
      title: "Next to ",
      subTitle: "a large wetland",
    },
    {
      image: Location,
      title: "Strategically ",
      subTitle: "located in KL",
    },
  ]);
  return (
    <div className="benefit-section-wrapper">
      <img className="benefit-element-backdrop" src={Element} alt="element" />
      <div className="benefit-text-wrapper">
        <div className="benefit-text-top" data-aos="fade-down">
          A township flanked by
        </div>
        <div className="benefit-text-highlight" data-aos="fade-down">
          {" "}
          Natural Wonders
        </div>
      </div>
      <div className="benefit-map-wrapper">
        <img className="benefit-map" src={Map} alt="map" />
      </div>
      <div className="benefit-grid-title" data-aos="fade-down">
        Designed to be the city of the future - a complete township
      </div>

      <div className="benefit-card-grid">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
            subTitle={benefit.subTitle}
          />
        ))}
      </div>
    </div>
  );
}
