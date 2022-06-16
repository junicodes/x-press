import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { SelectDropDownProps } from "../interface";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const SelectDropDown = ({
  label,
  onHandleChange,
  value,
  error,
  options,
  variant,
  containerVariant,
  optionHeight = 'h-64'
}: SelectDropDownProps) => {
  //Business category
  const [defaultValue, setDefautValue] = useState<string>("");
  const [showOption, setShowOption] = useState<boolean>(false);

  //Variable
  const iconSty = 'w-4 h-4 text-custom-gray-five absolute right-3 top-1/2 -mt-2';

  useEffect(() => {
    setDefautValue(value);
  }, []);

  const handleSelect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, name: string) => {
    //Send selected to form
    setDefautValue(name);
    setShowOption(false);
    //Send to form
    onHandleChange(e, JSON.stringify(name))
    
  };

  return (
    <div className={containerVariant}>
        <label className="text-custom-gray-three text-sm font-medium">
            {label}
        </label>
        <div className={variant} onClick={() => setShowOption(!showOption)}>
            {defaultValue}
            {
                showOption ?
                (
                    <BsChevronUp 
                    className={iconSty} 
                    /> 
                )
                : 
                (
                    <BsChevronDown 
                    className={iconSty} 
                    />
                )
            }
        </div>

      {showOption && (
        <div
          className={`
            rounded-t-none ${optionHeight} bg-white w-full rounded-md
            overflow-auto border-custom-gray-two absolute z-40
            `}
        >
          {options.map((item: any) => (
            <div
              key={item.name}
              className="hover:bg-gray-100"
              onClick={(e) => handleSelect(e, item.name)}
            >
              <div className="w-full h-12 flex flex-row justify-start items-center px-2">
                {item.name}
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
      <p className="text-red-200 text-sm h-1">{error}</p>
    </div>
  );
};

export default SelectDropDown;
