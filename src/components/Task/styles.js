import styled, { css } from 'styled-components';

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  height: 72px;
  height: 72px;
  
  padding: 24px 16px;
  border-radius: 7px;

  display: flex;
  align-items: center;
  gap: 7px;

  ${({ $done }) => $done && css`
    opacity: 0.5;
  `};

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    ${({ $done }) => $done && css`
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    `};

  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }

  > small {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;