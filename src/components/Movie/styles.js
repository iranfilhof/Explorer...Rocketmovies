import styled from 'styled-components'

export const Container = styled.div`
  width: 99.5%;

  padding: 29.3px 32px;
  margin-bottom: 5px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  transition: filter .5s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > .tags {
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (width: 1500px) {
    width: 100%;
  }
`;