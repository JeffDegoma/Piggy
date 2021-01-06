import React, {Component} from 'react'
import FlexDiv from '../div/flex'
import styled from 'styled-components'


const Background = styled(FlexDiv)`
    height: auto;

    h1 {
        font-size: 4em;
        color: #e40808;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        background: black;
        div {
            text-align: center;
            font-size: .9em;
            height: auto;
        }
    }
`
const BookContainer = styled(FlexDiv)`

    align-items: flex-start;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;

    a {
        color: white;
    }
   
`


const BookWrapper = styled(FlexDiv)`
    flex: 0;
    margin-right: 8px;
    flex-flow: column;
    margin-bottom: 35px;

    p {
        font-family: Karla-Regular;
        padding-top: 25px;
        color: white;
        margin: auto;
        font-size: 1.7em;
    }
    
`

const FNAF = [
    {imageUrl: 'https://static.zlibcdn.com/covers/books/5a/00/8a/5a008a2f44764d5c4398bf065650aee5.jpg', download: "https://b-ok.cc/dl/5012215/5aef6a", title: "The Silver Eyes"},
    {imageUrl: "https://vignette.wikia.nocookie.net/fnaf-the-novel/images/f/fc/Nightmare_Cover.jpg/revision/latest?cb=20170205060233",download: "https://b-ok.cc/dl/4823816/3a6a2e?dsource=recommend", title: "The Twisted Ones"},
    {imageUrl: "https://prodimage.images-bn.com/pimages/9781338139327_p0_v4_s550x406.jpg",download: "https://b-ok.cc/dl/5012216/03ee5f?dsource=recommend", title: "The Fourth Closet"}
]

const FreddyFaz = [
    {imageUrl: "https://static.zlibcdn.com/covers/books/8a/d3/8e/8ad38e347efbea15292f2c6d92e690eb.jpg",download: "https://b-ok.cc/dl/5431466/0fc7cf", title: "FETCH"},
    {imageUrl: "http://pm1.narvii.com/7313/7ae008cff55daefdc0c4fe24eb0ddc1190e6323dr1-1000-1540v2_uhq.jpg", download: "https://b-ok.cc/dl/5534872/f21882?dsource=recommend", title: "1:35"},
    {imageUrl: "https://abookandahug.com/media/reviews/photos/original/75/25/8b/step-closer-70-1592427150.jpeg", download: "", title: "Step Closer"},
    {imageUrl: "https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/1/13/1200.jpg/revision/latest?cb=20200227214418", download: "", title: "Bunny Call"}
]

const Book = ({book}) => {
    return (
       <a href={book.download}><img src={book.imageUrl} width="300px" max-height="400px" alt=""/></a>
    )
}
const Book2 = ({book2}) => {
    return (
       <a href={book2.download}><img src={book2.imageUrl} width="300px" max-height="400px" alt=""/></a>
    )
}

export default class Content extends Component {

    render(){
        return(
            <Background  flowColumn >
                <h2>Fazbear's Frights Collection</h2>
                <BookContainer  flowRow> 
                {/* for each book in book series */}
                {FreddyFaz.map((book) => {
                    return (
                        <BookWrapper>
                                 <Book book={book}/>
                                 <p>{book.title}</p>
                        </BookWrapper>
                    )
                })
                }
                
                </BookContainer>
                <BookContainer>
                    <h2>Five Nights at Freddy's Collection</h2>
                {
                    FNAF.map((book2) => {
                        return (
                            <BookWrapper>
                            <Book2 book2={book2}/>
                            <p>{book2.title}</p>
                            </BookWrapper>
                        )
                    })
                }
                </BookContainer>
                <h1>Come Read With Us, Maddy</h1>
            </Background>
        )
    }
}
