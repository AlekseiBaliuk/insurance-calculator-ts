import * as SC from "./ButtonSm.styled";

interface IButtonSm extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonSm = ({ text, type, active, onClick }: IButtonSm) => {
  return (
    <SC.ButtonSm
      style={{
        backgroundColor: `${active ? "#69F0AE" : "transparent"}`,
      }}
      onClick={onClick}
      type={type}
    >
      {text}
    </SC.ButtonSm>
  );
};
