import React, { HTMLProps, SyntheticEvent, forwardRef } from "react";

interface CustomInputProps
  extends Omit<HTMLProps<HTMLInputElement>, "onChange" | "value"> {
  value?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  buttonAction?: () => void;
  buttonText?: string;
  className?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      value,
      onChange,
      onKeyDown,
      placeholder = "",
      buttonAction,
      buttonText = "Add",
      className,
      ...props
    },
    ref,
  ) => {
    const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.currentTarget.value);
      }
    };

    return (
      <>
        <input
          data-testid="task-input"
          {...props}
          value={value}
          ref={ref}
          className={className}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
        {buttonAction && (
          <button data-testid="add-button" onClick={buttonAction}>
            {buttonText}
          </button>
        )}
      </>
    );
  },
);

export default CustomInput;
