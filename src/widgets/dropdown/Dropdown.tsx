import "./Dropdown.scss";

type DropdownProps = {
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
};

export default function Dropdown({
  options,
  value,
  onChange,
  className,
  placeholder = "Choose Project",
}: DropdownProps) {
  return (
    <select
      className={`dropdown ${className || ""}`}
      value={value || ""}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
