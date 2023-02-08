import { useState } from "react";
import { Button } from "../Button/Button";
import { BtnWrapper } from "../Section/BtnWrapper";
import { Section } from "../Section/Section";

interface IInsuranceType {
  setInsuranceType: (text: string) => void;
}

export const InsuranceType = ({ setInsuranceType }: IInsuranceType) => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);

  return (
    <Section text="Insurance type">
      <BtnWrapper>
        <Button
          active={active}
          type="button"
          text="Annual insurance"
          onClick={() => {
            setActive(true);
            setActive1(false);
            setInsuranceType("annual");
          }}
        />
        <Button
          onClick={() => {
            setActive(false);
            setActive1(true);
            setInsuranceType("short");
          }}
          active={active1}
          type="button"
          text="Short term insurance"
        />
      </BtnWrapper>
    </Section>
  );
};
