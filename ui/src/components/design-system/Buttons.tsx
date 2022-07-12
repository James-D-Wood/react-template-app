import React from "react";

type ButtonStyle = "primary" | "secondary" | "tertiary" | "default";

interface ButtonProps {
  style: ButtonStyle;
  disabled: boolean;
  type: "button" | "submit" | "reset";
  children: string;
}

export function Button(props: ButtonProps) {
  const setStyle = (style: ButtonStyle): string => {
    const baseStyle = "border-1 rounded-lg p-2 font-bold";
    let additionalStyle = "";
    switch (style) {
      case "primary":
        additionalStyle =
          "bg-emerald-700 hover:bg-emerald-600 border-emerald-700 text-white";
        break;
      case "secondary":
        break;
      case "tertiary":
        break;
      case "default":
        break;
      default:
        break;
    }
    return `${baseStyle} ${additionalStyle}`;
  };

  return (
    <button
      className={setStyle(props.style)}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
