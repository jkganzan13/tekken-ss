import styled from 'styled-components';

export const CommonContainer = styled.div`
  padding: 0.5rem 1rem;
`;

export const Title = styled.div`
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
`;

export const ListHeader = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const AnchorButton = styled.button`
  cursor: pointer;
  float: right;
`;

export const Drawer = styled.div`
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
`;
