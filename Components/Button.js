import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({buttontext,style}) {
    
  return (
    <button className={style}>
        <Link to='/' >{buttontext}</Link>
    </button>
  )
}
