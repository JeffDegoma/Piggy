import { createGlobalStyle } from 'styled-components'
// import Karlattf from '../../../assets/fonts/Karla-Regular.ttf'
import background from '../../assets/images/ef0b79526578e5befc1c65f8be84e9a7.jpg'


const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }
    
    @font-face {
        font-family: Karla-Regular;
        font-style: normal;
        src: 
            url('../../../assets/fonts/Karla-Regular.ttf') format('ttf');
    }
    html, body {
        margin: 0px;
        font-family: Karla-Regular;
        overflow-x: hidden;
        &::before {
            height: 100%;
            content: '';
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-size: cover;
            opacity: .4;
            background-image: url(${background});

        }

    }
    `
    
    
    export default GlobalStyle