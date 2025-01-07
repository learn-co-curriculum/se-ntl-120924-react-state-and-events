const ColorParagraph = (props) => {
    return (
        <p onClick={props.handleClick} style={{color: props.color}}>
            {props.children}
        </p>
    )
}

export default ColorParagraph