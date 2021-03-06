import styled from 'styled-components'

const FlexDiv = styled.div `
    display: flex;

    flex-wrap: ${(props) => {
        if (props.NoWrap) return 'no-wrap'
        return 'wrap'
    }};

    flex-flow: ${props => {
        if(props.flowColumn) return 'column'
        return 'row'
    }};

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent
        else if (props.justifyEnd) return 'flex-end'
        else if (props.justifyCenter) return 'center'
        else if (props.spaceEvenly) return 'space-evenly'
        else if (props.spaceAround) return 'space-around'
        else if (props.spaceBetween) return 'space-between'
        return 'flex-start'
    }};
    align-items: ${props => {
        if(props.alignItems) return props.alignItems
        else if (props.alignCenter) return 'center'
        else if (props.alignBottom) return 'flex-end'
        return 'flex-start'
    }};

    align-content: ${props => {
        if(props.alignContent) return content
        else if (props.contentCenter) return 'center'
    }};

`   

export const Column = styled.div `
    width: ${props => {
        if (props.two) return '50%'
        else if (props.three) return '33.3%'
    }};

`
export default FlexDiv;

// flex properties for child elements: wrap, no wrap, flex-direction