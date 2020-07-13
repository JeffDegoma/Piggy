import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'
import StrangerCreature from '../../assets/fonts/StrangerCreature-MVpBr.ttf'


const fontFace = css`
    @font-face {
        font-family: StrangerCreature;
        font-style: normal;
        src: url('${StrangerCreature}');
    }
`


const GlobalStyle = createGlobalStyle`
    ${fontFace}
    * {
        box-sizing: border-box;
    }
    
    
    html, body {
        margin: 0px;
        font-family: StrangerCreature;
        height: 100vh;
        // background-image:url("https://static.zlibcdn.com/covers/books/8a/d3/8e/8ad38e347efbea15292f2c6d92e690eb.jpg");
        // background-position: top;
        background: black;
        h2 {
            color: #e40808;
            width: 100%;
            text-align: center;
            font-size: 3em;
            letter-spacing: 5px;
        }
       
    }
    `
    
    
    export default GlobalStyle