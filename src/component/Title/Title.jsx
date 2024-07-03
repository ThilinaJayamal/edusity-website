import React from 'react'
import "./Title.css"

function Title(profs) {
  return (
    <div className='title'>
        <p>{profs.subTitle}</p>
        <h2>{profs.title}</h2>
    </div>
  )
}

export default Title