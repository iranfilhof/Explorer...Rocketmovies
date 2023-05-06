import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 116px 102px auto;
    grid-template-areas: 
    "header"
    "add"
    "content"
    ;
  
  > main {
    grid-area: content;
    overflow-y: auto;
  }

  @media (min-height: 900px) {
    grid-template-rows: 116px 132px auto;
    }
`;

export const Add = styled.div`
    grid-area: add;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 50px 126px;

    h1 {
      font-weight: 400;
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.PINK};

      border: none;
      border-radius: 8px;

      padding: 13px 32px;

      display: flex;
      align-items: center;
      gap: 8px;

      > svg {
        width: 16px;
        height: 16px;
      }
    }
`;

export const Content = styled.div`
    min-width: 1000px;
    height: 430px;
    overflow-y: auto;

    margin: 0 126px auto;

    @media (min-height: 900px) {
      height: 653px;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {

    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};

      border-radius: 8px;
      
    }
`;