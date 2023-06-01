import styled from 'styled-components'

export const Container = styled.div`
  > a {
    grid-area: back;
    height: 80px;
    width: max-content;
    margin: 30px 123px 0;
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK}
  }
`;

