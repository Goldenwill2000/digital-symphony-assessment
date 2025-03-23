import "./HomeCard.scss";
import HomeIcon from "../../assets/images/icon-home.png";
import Button from "../button/Button";
import { commafy } from "../../utilities/Utilities";

type HomeCardProps = {
  image: string;
  title: string;
  homeType: string;
  description: string;
  monthlyRepayment: string;
  price: number;
  onFeatureClick: () => void;
  onRegisterClick: () => void;
};
export default function HomeCard({
  image,
  title,
  homeType,
  description,
  monthlyRepayment,
  price,
  onFeatureClick,
  onRegisterClick,
}: HomeCardProps) {
  return (
    <div className="home-card-wrapper">
      <img className="home-card-image" src={image} />

      <div className="home-card-text-wrapper">
        <div className="home-card-title">{title}</div>
        <div className="home-card-home-type-wrapper">
          <img className="home-card-home-type-icon" src={HomeIcon} />
          <div className="home-card-home-type">{homeType}</div>
        </div>

        <hr className="home-card-divider" />

        <div className="home-card-description">{description}</div>

        <hr className="home-card-divider" />

        <div className="home-card-price-wrapper">
          <div className="home-card-price">
            <div className="home-card-price-text">Price from</div>
            <div className="home-card-price-highlight">
              {" "}
              RM {commafy(price)}*
            </div>
          </div>

          <div className="home-card-monthly-repayment">
            <div className="home-card-monthly-repayment-text">
              Monthly Repayment
            </div>
            <div className="home-card-monthly-repayment-highlight">
              RM {monthlyRepayment}
            </div>
          </div>
        </div>

        <hr className="home-card-divider" />

        <div className="home-card-features">
          <Button
            text="Features"
            onClick={onFeatureClick}
            fullWidth
            hasIcon
            icon={HomeIcon}
          />
          <Button
            text="Register"
            onClick={onRegisterClick}
            inverted
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
