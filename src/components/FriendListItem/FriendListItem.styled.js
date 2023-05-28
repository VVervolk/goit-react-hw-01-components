import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 200px;
  padding: 5px 26px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px 2px rgba(124, 180, 255, 1);

  span {
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ props }) => (props ? 'green' : 'red')};
  }
`;
