import { FormikButtonProps } from "../interface";

const FormikButton = ({
  labelText,
  variant,
  containerVariant,
  isDisabled,
}: FormikButtonProps) => {
  return (
    <div className={containerVariant}>
      <button
        type="submit"
        className={variant}
        disabled={isDisabled}
      >
        {labelText}
      </button>
    </div>
  );
};

export default FormikButton;
