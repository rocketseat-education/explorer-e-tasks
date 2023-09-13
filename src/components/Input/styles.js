import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: 7px;
  
  > input {
    height: 56px;
    width: 100%;
    font-size: 16px;
    padding: 12px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    margin-left: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;