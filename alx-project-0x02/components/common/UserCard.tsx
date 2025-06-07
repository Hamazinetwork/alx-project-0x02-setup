import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({id, name, email, address}) => {
  return (
    <div>
        <p>{id}</p>
      <h1>{name}</h1>
      <p>{email}</p>
        <p>{address}</p>
    </div>  
  )
}

export default UserCard;
