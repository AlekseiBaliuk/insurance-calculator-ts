import { ReactNode } from "react";
import * as SC from "./Section.styled";

interface ISection {
  text: string;
  children: ReactNode;
}

export const Section = ({ text, children }: ISection) => {
  return (
    <SC.Wrapper>
      <SC.Title>{text}</SC.Title>
      {children}
    </SC.Wrapper>
  );
};
