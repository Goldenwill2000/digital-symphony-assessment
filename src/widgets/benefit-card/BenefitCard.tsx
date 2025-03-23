import "./BenefitCard.scss";
type BenefitCardProps = {
  image: string;
  title: string;
};

export default function BenefitCard({ image, title }: BenefitCardProps) {
  return (
    <div className="benefit-card-wrapper">
      <img className="benefit-card-image" src={image} />
      <div className="benefit-card-title">{title}</div>
    </div>
  );
}
