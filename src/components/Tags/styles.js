import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  padding: 5px 16px;
  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  width: fit-content;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

`;