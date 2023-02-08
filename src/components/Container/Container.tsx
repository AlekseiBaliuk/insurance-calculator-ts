import { ReactNode } from "react";
import * as SC from "./Container.styled";

interface IContainer {
  children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
  return <SC.Container>{children}</SC.Container>;
};
