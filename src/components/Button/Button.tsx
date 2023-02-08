import React from "react";
import * as SC from "./Button.styled";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, type, active, onClick }: IButton) => {
  return (
    <SC.Button
      style={{ backgroundColor: `${active ? "#69F0AE" : "transparent"}` }}
      onClick={onClick}
      type={type}
    >
      {text}
    </SC.Button>
  );
};
