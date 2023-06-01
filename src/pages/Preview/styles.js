import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  main {
    min-width: 337px;
    height: 450px;
    margin: -20px 123px auto;

    overflow-y: auto;

    &::-webkit-scrollbar {
      background: none;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }

  @media (min-height: 700px) {
    main {
      height: 600px;
    }
  }

  @media (min-width: 1400px) {
    main {
      min-width: 1137px;
    }
  }

`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 30px;

  > header {
    display: flex;
    align-items: flex-end;
    margin: 24px 0;

    h1 {
      font-size: 36px;
      font-weight: 500;
      margin-right: 19px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 5px;
      font-size: 20px;
    }

  }
  
   .userDate {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;

    img {
    width: 16px;
    height: 16px;
    border-radius: 50%;

    margin-right: 8px;
    }

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 8px;
    }
  }

  .tags {
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
  }

  > p {
    width: 99.3%;
    text-align: justify;
  }
`;