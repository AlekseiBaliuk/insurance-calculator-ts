import { useEffect, useState } from "react";

import { Section } from "../Section/Section";
import * as SC from "./NumberOfPeople.styled";

interface INumberOfPeople {
  setNumOfPeople: (num: number) => void;
}

export const NumberOfPeople = ({ setNumOfPeople }: INumberOfPeople) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < 3) {
      setCount((count) => count + 1);
    }
  };

  useEffect(() => {
    setNumOfPeople(count);
  }, [count, setNumOfPeople]);

  return (
    <Section text="Number of people">
      <SC.Wrapper>
        <SC.Btn onClick={handleDecrement}>-</SC.Btn>
        <SC.Span>{count}</SC.Span>
        <SC.Btn onClick={handleIncrement}>+</SC.Btn>
      </SC.Wrapper>
    </Section>
  );
};
