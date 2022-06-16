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
        {icon && <span className="mr-1"> {icon} </span>}
        {labelText}
      </button>
    </div>
  );
};

export default DefaultButton;
