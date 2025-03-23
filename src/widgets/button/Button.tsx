import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  inverted?: boolean;
  fullWidth?: boolean;
  hasIcon?: boolean;
  icon?: string;
};
export default function Button({
  text = "Text",
  inverted = false,
  fullWidth = false,
  hasIcon = false,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <div
      className="button-wrapper"
      style={{
        background: inverted ? "#669999" : "#f7f7f7",
        color: inverted ? "#f7f7f7" : "#669999",
        border: inverted ? "1px solid #f7f7f7" : "1px solid #669999",
        width: fullWidth ? "100%" : "auto",
      }}
      onClick={onClick}
    >
      {hasIcon && (
        <>
          <img className="button-icon" src={icon} alt="icon" />
        </>
      )}
      {text}
    </div>
  );
}
