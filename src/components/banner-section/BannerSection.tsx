import "./BannerSection.scss";
import Element from "../../assets/images/element.png";
import { useEffect } from "react";
import * as Aos from "aos";

export default function BannerSection() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="banner-section-wrapper">
      <img className="element-backdrop" src={Element} alt="element" />
      <div className="banner-text-wrapper" data-aos="fade-right">
        <div className="banner-text-top">Live in a </div>
        <div className="banner-text-highlight">Nature Sanctuary</div>
        <div className="banner-text-bottom">
          Lavishly designed with private gardens, canals and a 20-acre
          greenhouse
        </div>
      </div>
    </div>
  );
}
