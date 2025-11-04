import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className='card'>
                <img src={props.img} alt="" />
                <h1>{props.user}</h1>
                <h2>{props.skill}</h2>
                <p>{props.des}</p>
            </div>
    </>
  )
}

export default Cards
