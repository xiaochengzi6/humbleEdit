
import { memo } from 'react';

interface ButtonPropsType {
  command: string
  name: string
}

const Button = memo<ButtonPropsType>((props) => {

  const { command, name } = props

  return (
    <button
      id={command}
      value={name}
      key={command}
    >
      {name}
    </button>
  )
})

export default Button