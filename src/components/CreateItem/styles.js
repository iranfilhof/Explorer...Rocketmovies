import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
  
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  
  > input {
    height: 56px;
    width: ${({ isNew }) => isNew ? '135px' : '157px'};

    padding: 12px 0 12px 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > button {
    display: flex;
    align-items: center;

    border: none;
    background: none;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;