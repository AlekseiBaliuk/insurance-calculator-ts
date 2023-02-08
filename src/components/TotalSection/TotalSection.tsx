import * as SC from "./TotalSection.styled";

interface ITotalSection {
  total: number;
}

export const TotalSection = ({ total }: ITotalSection) => {
  return (
    <SC.Wrapper>
      <SC.Title>
        Your cost of insurance: € <span>{total}</span>
      </SC.Title>
    </SC.Wrapper>
  );
};
