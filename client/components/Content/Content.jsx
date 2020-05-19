import React, {Component} from 'react'
import FlexDiv from '../div/flex'
import styled from 'styled-components'

const axios = require('axios')

const Background = styled(FlexDiv)`
    height: 100vh;

    div {
        margin: auto;

        h1 {
            font-size: 3em;
        }
    }

`

export default class Content extends Component {
    
    state = {
        piggies: null
    }
    componentDidMount(){
        //fetch from database
        this.fetchFromDb()
    }

    fetchFromDb() {
        axios.get('http://localhost:3000/api/piggies/getPiggies')
        .then((res) => {
            return res.data.map(piggy => piggy)
        })
        .then((piggies) => {
            this.setState({
                piggies //populate piggies in state from database
            }, console.log(piggies))
        })
        .catch(err => console.log('err', err))
    }

    render(){
        return(
            <Background alignCenter flowColumn >
                <FlexDiv alignCenter flowColumn>
                    <h1>Come play with us, Maddy.</h1>
                    <h3>Coming Soon...</h3>
                
                </FlexDiv>
            </Background>
        )
    }
}


