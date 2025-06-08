import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({size, shape}) => {
  return (
    <button className={`btn btn-${size} btn-${shape}`}>
      Click Me
    </button>
  )
}

export default Button;