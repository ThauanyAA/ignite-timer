import { styled } from "styled-components";

export const HomeContainer = styled.div`
  width: 42rem;
  flex: 1;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    margin-top: 4.5rem;
    width: 100%;
  }

`;


export const BaseCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["red-700"]};
  }
`;