import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  min-width: 320px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 24px 123px;
  
  h2 {
    color: ${({ theme }) => theme.COLORS.PINK}
  }

`;

export const Profile = styled.a`
  min-width: 320;
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border-width: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 9px;
  }

  > div {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    font-weight: 700;

    span {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
      font-weight: 400;
      display: flex;
      justify-content: end;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;