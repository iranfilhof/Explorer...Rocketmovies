import styled from "styled-components";

export const Container = styled.div`
  input {
    min-width: 320px;
    height: 56px;

    padding: 0 24px;

    background: transparent;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;

    &:placeholder {
      color: ${({  theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (min-width: 1300px) {
    input {
      min-width: 630px;
    }
  }
`;