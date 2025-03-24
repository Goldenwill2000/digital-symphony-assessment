import * as Aos from "aos";
import { useEffect } from "react";
import "./BenefitCard.scss";
type BenefitCardProps = {
  image: string;
  title: string;
  subTitle: string;
};

export default function BenefitCard({
  image,
  title,
  subTitle,
}: BenefitCardProps) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="benefit-card-wrapper" data-aos="flip-up">
      <img className="benefit-card-image" src={image} />
      <div className="benefit-card-title">
        <div className="benefit-card-title-text">{title}</div>
        <div className="benefit-card-subtitle-text">{subTitle}</div>
      </div>
    </div>
  );
}
