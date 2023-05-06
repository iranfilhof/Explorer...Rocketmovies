import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "back"
  "content"
  ;
  main {
    overflow-y: auto;
    

  &::-webkit-scrollbar {
    background: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  } 

  @media (min-width: 1400px) {
    main {
      min-width: 1900px;
    }
  }
}
`;

export const Content = styled.div`
  grid-area: content;
  min-width: 328px;
  margin: 0 115px 30px;

  @media (min-width: 1400px) {
    min-width: 2300px;
  }
  
  > .inputs {
    display: flex;
    gap: 40px;
    margin: 30px 0;
  }

  > textarea {
    width: 100%;
    min-height: 274px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-style: none;
    resize: none;
    border-radius: 10px;

    padding: 19px 16px;

    &::-webkit-scrollbar {
      background: none;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }

  > h3 {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .marks {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    padding: 16px 16px 8px;
    border-radius: 8px;
  }

  .buttons {
    display: flex;
    gap: 40px;

    margin-top: 30px;
  }
  .delete {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;