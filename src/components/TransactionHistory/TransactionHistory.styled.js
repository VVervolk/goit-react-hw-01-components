import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  padding: 20px 10px;
  border-radius: 5px;

  background-color: white;
`;

export const Head = styled.thead`
  background-color: #7cb4ff;
  color: white;
`;

export const Row = styled.tr`
  text-align: center;

  &:nth-child(even) {
    background-color: #d9e8fb;
  }
`;
