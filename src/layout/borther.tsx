import React, {useContext} from 'react'
import {TextContext} from './father'

const Brotehr =() => {
  const userContext = useContext(TextContext)

  return(
    <div>{userContext?.username}</div>
    )
}

export default Brotehr
