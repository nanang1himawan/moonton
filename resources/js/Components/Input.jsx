import React, { useEffect, useRef } from "react";
import Proptypes from "prop-types";

Input.prototype = {
    type: Proptypes.oneOf(["text", "email", "password", "number", "file"]),
    name: Proptypes.string,
    value: Proptypes.oneOf([Proptypes.string, Proptypes.number]),
    defaultValue: Proptypes.oneOf([Proptypes.string, Proptypes.number]),
    className: Proptypes.string,
    variant: Proptypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: Proptypes.string,
    require: Proptypes.bool,
    isFocused: Proptypes.bool,
    handleChange: Proptypes.func,
    placeholder: Proptypes.string,
    isError: Proptypes.bool,
};

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}


