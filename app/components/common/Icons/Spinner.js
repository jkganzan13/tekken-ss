import styled from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

export default styled(FaCircleNotch)`
  height: ${props => props.size || 44}px;
  width: ${props => props.size || 44}px;

  -webkit-animation: icon-spin 2s infinite linear;
  animation: icon-spin 2s infinite linear;

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;
