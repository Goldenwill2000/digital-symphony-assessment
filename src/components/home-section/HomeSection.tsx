import { useEffect, useState } from "react";
import HomeCard from "../../widgets/home-card/HomeCard";
import "./HomeSection.scss";
import Home1 from "../../assets/images/home-1.png";
import Home2 from "../../assets/images/home-2.png";
import Home3 from "../../assets/images/home-3.png";
import Button from "../../widgets/button/Button";
import Element from "../../assets/images/element.png";

import "aos/dist/aos.css";
import * as Aos from "aos";
export default function HomeSection() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [homes] = useState([
    {
      image: Home1,
      title: "Palm Springs",
      homeType: "2-storey Terrace Homes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      monthlyRepayment: "3,XXX",
      price: 600000,
      onFeatureClick: () => {},
      onRegisterClick: () => {},
    },
    {
      image: Home2,
      title: "Southern Water",
      homeType: "Waterfront Bungalow",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      monthlyRepayment: "1X,XXX",
      price: 2600000,
      onFeatureClick: () => {},
      onRegisterClick: () => {},
    },
    {
      image: Home3,
      title: "The Ruums",
      homeType: "Semi-Detached Homes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      monthlyRepayment: "1X,XXX",
      price: 1000000,
      onFeatureClick: () => {},
      onRegisterClick: () => {},
    },
  ]);
  return (
    <div className="home-section-wrapper">
      <img className="home-element-backdrop" src={Element} alt="element" />

      <div className="home-section-title" data-aos="fade-up">
        Newly Launched Homes
      </div>
      <hr className="home-section-divider" data-aos="fade-up" />
      <div className="home-section-subtitle" data-aos="fade-up">
        Our exclusive range of custom designed homes
      </div>
      <div className="home-card-grid">
        {homes.map((home, index) => (
          <div key={index} data-aos="fade-up">
            <HomeCard
              image={home.image}
              title={home.title}
              homeType={home.homeType}
              description={home.description}
              monthlyRepayment={home.monthlyRepayment}
              price={home.price}
              onFeatureClick={home.onFeatureClick}
              onRegisterClick={home.onRegisterClick}
            />
          </div>
        ))}
      </div>
      <Button inverted text="More Homes" onClick={() => console.log("click")} />
      <img
        className="home-element-backdrop-bottom"
        src={Element}
        alt="element"
      />
    </div>
  );
}
