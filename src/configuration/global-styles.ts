import { createGlobalStyle } from 'styled-components';
import AvenirNextRegularWoff from '../static/font/AvenirNext-Regular.woff';
import AvenirNextRegularTtf from '../static/font/AvenirNext-Regular.ttf';
import AvenirNextMediumWoff from '../static/font/AvenirNext-Medium.woff';
import AvenirNextMediumTtf from '../static/font/AvenirNext-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: local('Avenir Next'), local('AvenirNext'),
         url(${AvenirNextRegularWoff}) format('woff'),
         url(${AvenirNextRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: local('Avenir Next'), local('AvenirNext'),
         url(${AvenirNextMediumWoff}) format('woff'),
         url(${AvenirNextMediumTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    -ms-overflow-style: none;  /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
   
  body {
     margin: 0;
  }
  
  #root {
    display: flex;
    justify-content: left;
    height: 100vh;
  }
  
  h2 {
    font-family: 'Avenir Next',sans-serif;
    font-weight: 600;
    font-style: normal;
    color: #324552;
    margin-left: 32px;
  }
  
  ::-webkit-scrollbar { /* chrome based */
    width: 0;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
}
`;