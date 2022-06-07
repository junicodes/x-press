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
      <label className="mb-10 text-white">{label}</label>
      {icon}
      <input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={variant}
        placeholder={placeHolder}
      />
      <p className="text-red-200 text-sm py-1">{error}</p>
    </div>
  );
};

export default DefaultInput;
