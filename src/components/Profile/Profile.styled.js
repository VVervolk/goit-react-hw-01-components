import styled from '@emotion/styled';

export const Container = styled.div`
  width: 200px;
  height: auto;
  padding-top: 20px;
  background-color: white;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;

  background-color: #d8e6f9;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  color: #7cb4ff;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  color: #7cb4ff;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 5px;

  font-size: 12px;
  outline: solid 1px #d8e6f9;
  color: #7cb4ff;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-weight: 500;
  color: black;
`;
