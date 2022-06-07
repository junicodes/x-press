import { DefaultButtonProps } from "../interface";

const DefaultButton = ({
  labelText,
  handleClick,
  isDisabled,
  variant,
  containerVariant,
  icon
}: DefaultButtonProps) => {
  return (
    <div className={containerVariant}>
      <button
        type="button"
        className={variant}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {icon}
        &nbsp;&nbsp;&nbsp;
        {labelText}
      </button>
    </div>
  );
};

export default DefaultButton;
