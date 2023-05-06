import styled from 'styled-components'

export const Container = styled.a`
  > a {
    grid-area: back;
    height: 80px;
    width: max-content;
    margin: 0 123px 0;
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK}
  }
`;

