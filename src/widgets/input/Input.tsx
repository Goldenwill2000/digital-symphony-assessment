import "./Input.scss";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  fullWidth = false,
}: InputProps) {
  return (
    <input
      className={`custom-input ${fullWidth ? "full-width" : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
