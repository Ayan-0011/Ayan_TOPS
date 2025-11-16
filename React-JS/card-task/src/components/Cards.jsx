import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className='cards'>
            <div className="top">
                <img src={props.logo} alt="" />
                    <button>save <i class="fa-regular fa-bookmark"></i> </button>
            </div>
            <div className="center">
                <h1>{props.name}<span> {props.date}</span></h1>
                <p>{props.post}</p>
                <div className='tags'>
                    <button>{props.tag1}</button>
                    <button>{props.tag2}</button>
                </div>
            </div>
            <div className="botom">
                <div>
                    <p  className='pay'>{props.pay}</p>
                    <p className='location'>{props.location}</p>
                </div>
                <button> apply now </button>
            </div>
        </div>
    </>
  )
}

export default Cards
