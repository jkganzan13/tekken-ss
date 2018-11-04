import styled from 'styled-components';

const commonStyle = `
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  ${commonStyle};
`;

export const DefaultImage = styled.div`
  ${commonStyle};
  background: grey;
`;
