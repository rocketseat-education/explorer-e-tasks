import styled from "styled-components";

export const Container = styled.section`
  padding: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 7px;
  }

  > small {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Tasks = styled.div`
  border: 1px dashed  ${({ theme }) => theme.COLORS.RED_200};
  min-height: 154px;
  border-radius: 7px;
  margin-top: 16px;

  display: flex;
  gap: 16px;
  padding: 24px;
  flex-wrap: wrap;
`;