import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 9rem;
  line-height: 8rem;
  color: ${({ theme }) => theme["gray-100"]};
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    background: ${({ theme }) => theme["gray-700"]};
    padding: 2rem 1.5rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;