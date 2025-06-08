import React from 'react'
import { type CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  )
}

export default Card;
