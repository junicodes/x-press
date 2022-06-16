import { DefaultInputProps } from "../interface";

const DefaultInput = ({
  type,
  name,
  label,
  handleChange,
  handleBlur,
  value,
  error,
  placeHolder,
  variant,
  containerVariant,
  icon
}: DefaultInputProps) => {
  return (
    <div className={containerVariant}>
      <label htmlFor={`input${name}`} className="text-custom-gray-three text-sm font-medium">{label}</label>
      {icon}
      <input
        id={`input${name}`}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={variant}
        placeholder={placeHolder}
      />
      <p className="text-red-600 text-xs h-2">{error}</p>
    </div>
  );
};

export default DefaultInput;
