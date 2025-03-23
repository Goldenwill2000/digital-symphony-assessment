import "./BenefitSection.scss";
import Map from "../../assets/images/map.png";
import { useState } from "react";
import BenefitCard from "../../widgets/benefit-card/BenefitCard";
import Wetlands from "../../assets/images/wetlands.png";
import Park from "../../assets/images/park.png";
import Highway from "../../assets/images/highway.png";
import Location from "../../assets/images/location.png";

export default function BenefitSection() {
  const [benefits] = useState([
    {
      image: Park,
      title: "Central Park at your doorstep",
    },
    {
      image: Highway,
      title: "Easy Access to major highways",
    },
    {
      image: Wetlands,
      title: "Next to a large wetland",
    },
    {
      image: Location,
      title: "Strategically located in KL",
    },
  ]);
  return (
    <div className="benefit-section-wrapper">
      <div className="benefit-text-wrapper">
        <div className="benefit-text-top">A township flanked by</div>
        <div className="benefit-text-highlight"> Natural Wonders</div>
      </div>
      <img className="benefit-map" src={Map} alt="map" />
      <div className="benefit-grid-title">
        Designed to be the city of the future - a complete township
      </div>

      <div className="benefit-card-grid">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
          />
        ))}
      </div>
    </div>
  );
}
