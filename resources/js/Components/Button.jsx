import React from "react";
import Proptypes from "prop-types";

Button.proptypes = {
    type: Proptypes.oneOf(["button", "submit", "reset"]),
    className: Proptypes.string,
    variant: Proptypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: Proptypes.bool,
    children: Proptypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
