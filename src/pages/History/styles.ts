import { styled } from "styled-components";

const STATUS_COLORS = {
  green: "green-500",
  red: "red-500",
  yellow: "yellow-500",
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      font-weight: bold;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        width: 45%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
  
  /* display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  } */
`;

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, statusColor }) => theme[STATUS_COLORS[statusColor]]};
  }
`;