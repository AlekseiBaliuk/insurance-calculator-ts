import { useEffect, useState } from "react";
import { BtnWrapper } from "../Section/BtnWrapper";
import { Section } from "../Section/Section";
import * as SC from "./Period.styled";

interface IPeriod {
  setDays: (days: number) => void;
}

export const Period = ({ setDays }: IPeriod) => {
  const [startDate, setStartDate] = useState<Date | string>(new Date());
  const [endDate, setEndDate] = useState<Date | string>("");

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    if (startDate && endDate && typeof startDate !== "string") {
      const sd = startDate.getDate();
      const nd = new Date(endDate).getDate();
      const d = nd - sd;

      if (d > 0) {
        setDays(d);
      }
    }
  }, [endDate, setDays, startDate]);

  let beginDate;
  if (typeof startDate !== "string") {
    beginDate = startDate.toISOString().slice(0, 10);
  }

  return (
    <Section text="Period">
      <BtnWrapper>
        <SC.Input
          type="date"
          min={beginDate}
          value={beginDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <SC.Input
          type="date"
          min={tomorrow.toISOString().slice(0, 10)}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </BtnWrapper>
    </Section>
  );
};
