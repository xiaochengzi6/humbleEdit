
import { memo } from 'react';

interface SelectProps {
  options: SelectOptions[]
  title?: string
  command?: string
}

export interface SelectOptions {
  label: string
  value: string | boolean
}

const Select = memo<SelectProps>((props) => {

  const { options, title, command } = props
  return (
    <select
      name={command}
      id={command}
      title={title}
    >
      {
        options.map((option) => {
          return (
            <option
              className={command + 'option'}
              value={ typeof option.value !== 'string' ? option.value.toString() : option.value}
            >
              {option.value}
            </option>
          )
        })
      }
    </select>
  )
})

export default Select