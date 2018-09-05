import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
`;

export const HeaderContainer = styled.div`
  font-weight: bold;
`;

export const ComboContainer = styled.div`
  border: 1px solid lightgrey;
  background: white;
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  margin-top: 10px;
`;

export const StyledForm = styled.form`
  display: flex;

  > * {
    margin-right: 10px;
  }

  .ant-select {
    width: 20%;
    min-width: 200px;
  }

  .ant-input {
    width: 10%;
    min-width: 100px;
  }
`;
