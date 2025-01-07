const ColorParagraph = (props) => {
    return (
        <p style={{color: props.color}}>
            {props.children}
        </p>
    )
}

export default ColorParagraph