import ColorParagraph from '../StyledComponents/ColorParagraph'
import {useState} from 'react'

const Greeting = (props) => {
    const [color, setColor] = useState(0)

    const colors = ['green', 'blue', 'red']

    const handleClick = () => {
        setColor(prevColor => {
          if (prevColor == 2) {
            return 0
          }
          return prevColor + 1
        })
        // setColor("red")
      }

    return (
        <ColorParagraph handleClick={handleClick} color={colors[color]}>
            Hi {props.name}!
        </ColorParagraph>
    )
}

export default Greeting