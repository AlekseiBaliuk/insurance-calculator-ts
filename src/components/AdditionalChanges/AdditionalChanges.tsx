import { useState } from "react";
import { ButtonSm } from "../ButtonSm/ButtonSm";
import { BtnWrapper } from "../Section/BtnWrapper";
import { Section } from "../Section/Section";

interface IAdditionalChanges {
  setAdditional: (text: string) => void
}

export const AdditionalChanges = ({ setAdditional }: IAdditionalChanges) => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <Section text="Any additional changes?">
      <BtnWrapper>
        <ButtonSm
          active={active}
          type="button"
          text="No"
          onClick={() => {
            setActive(true);
            setActive1(false);
            setActive2(false);
            setAdditional("no");
          }}
        />
        <ButtonSm
          active={active1}
          type="button"
          text="Cancellation"
          onClick={() => {
            setActive(false);
            setActive1(true);
            setActive2(false);
            setAdditional("cancellation");
          }}
        />
        <ButtonSm
          active={active2}
          type="button"
          text="Sport activities"
          onClick={() => {
            setActive(false);
            setActive1(false);
            setActive2(true);
            setAdditional("sport");
          }}
        />
      </BtnWrapper>
    </Section>
  );
};
