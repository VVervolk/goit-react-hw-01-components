import styled from '@emotion/styled';

export const Section = styled.section`
  width: 200px;
  height: auto;
  padding-top: 20px;
  background-color: white;
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 25%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  background-color: ${({ color }) => color};
  color: white;
`;
