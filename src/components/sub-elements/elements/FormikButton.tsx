import { FormikButtonProps } from "../interface";

const FormikButton = ({
  labelText,
  variant,
  containerVariant,
  isDisabled,
  icon
}: FormikButtonProps) => {
  return (
    <div className={containerVariant}>
      <button
        type="submit"
        className={variant}
        disabled={isDisabled}
      >
        {icon && <span className="mr-1"> {icon} </span>}
        {labelText}
      </button>
    </div>
  );
};

export default FormikButton;
