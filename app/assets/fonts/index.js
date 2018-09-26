import MentalBlack from './mental_black.woff2';
import MentalBold from './mental_bold.woff2';
import MentalMedium from './mental_medium.woff2';
import TrumpGothic from './TrumpGothicPro-Bold.woff2';

export default () => `
  @font-face {
    font-family: Mental Black;
    src: url('${MentalBlack}') format('woff2');
  }
  @font-face {
    font-family: Mental Bold;
    src: url('${MentalBold}') format('woff2');
  }
  @font-face {
    font-family: Mental Medium;
    src: url('${MentalMedium}') format('woff2');
  }
  @font-face {
    font-family: Trump Bold;
    src: url('${TrumpGothic}') format('woff2');
  }
`;
