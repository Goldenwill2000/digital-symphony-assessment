import { useState } from "react";
import HomeCard from "../../widgets/home-card/HomeCard";
import "./HomeSection.scss";
import Home1 from "../../assets/images/home-1.png";
import Home2 from "../../assets/images/home-2.png";
import Home3 from "../../assets/images/home-3.png";
export default function HomeSection() {
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
      homeType: "Waterfront Nungalow",
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
      <div>Newly Launched Homes</div>
      <div> Our exclusive range of custom designed homes</div>

      <div className="home-card-grid">
        {homes.map((home) => (
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
        ))}
      </div>
    </div>
  );
}
