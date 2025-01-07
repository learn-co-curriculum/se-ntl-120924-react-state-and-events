import ColorParagraph from '../StyledComponents/ColorParagraph'

const Greeting = (props) => {

    return (
        <ColorParagraph color={props.color}>
            Hi {props.name}!
        </ColorParagraph>
    )
}

export default Greeting