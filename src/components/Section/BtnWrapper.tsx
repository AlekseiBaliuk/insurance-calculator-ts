import { ReactNode } from "react";
import * as SC from "./Section.styled";

interface IBtnWrapper {
  children: ReactNode;
}

export const BtnWrapper = ({ children }: IBtnWrapper) => {
  return <SC.BtnWrapper>{children}</SC.BtnWrapper>;
};
