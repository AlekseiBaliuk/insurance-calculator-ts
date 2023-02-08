import styled from "styled-components";

export const Btn = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #69f0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;

  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 245, 0, 0.09);
`;

export const Span = styled.span`
  padding: 0 2.25rem;
  font-weight: 700;
  width: 11px;
  height: 1rem;
  line-height: 100%;
`;
