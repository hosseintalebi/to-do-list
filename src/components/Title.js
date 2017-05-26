import React from 'react'

import './styles/Title.css'

export default function Title({children}) {
  return (
    <div className='title'>
      {children}
    </div>
  )
}
