// import { useState } from "react";
import { useState } from "react";
import { ButtonSm } from "../ButtonSm/ButtonSm";
import { BtnWrapper } from "../Section/BtnWrapper";
import { Section } from "../Section/Section";

interface IPackageType {
  setPackageType: (text: string) => void;
}

export const PackageType = ({ setPackageType }: IPackageType) => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <Section text="Package type">
      <BtnWrapper>
        <ButtonSm
          active={active}
          type="button"
          text="Basic"
          onClick={() => {
            setActive(true);
            setActive1(false);
            setActive2(false);
            setPackageType("basic");
          }}
        />
        <ButtonSm
          active={active1}
          type="button"
          text="Extended"
          onClick={() => {
            setActive(false);
            setActive1(true);
            setActive2(false);
            setPackageType("extended");
          }}
        />
        <ButtonSm
          active={active2}
          type="button"
          text="Extra"
          onClick={() => {
            setActive(false);
            setActive1(false);
            setActive2(true);
            setPackageType("extra");
          }}
        />
      </BtnWrapper>
    </Section>
  );
};
