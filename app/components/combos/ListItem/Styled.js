import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 64px;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

export const Col = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const Name = styled(Col)`
  width: 80px;
`;

export const Damage = styled(Col)`
  width: 16px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const SubText = styled.div`
  opacity: 0.6;
  font-size: 12px;
`;

export const Rating = styled.div`
  margin-left: auto;
`;
