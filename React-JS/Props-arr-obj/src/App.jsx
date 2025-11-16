import React from 'react'
import Cards from './component/cards'

const App = () => {

  const data = [
    {
      id: 1,
      img: 'https://png.pngtree.com/recommend-works/png-clipart/20250701/ourmid/pngtree-national-flag-of-india-png-image_16591645.webp',
      name: "Ayan Ansari",
      skill: "Frontend",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."
    },

    {
      id: 2,
      img: 'https://i.pinimg.com/474x/a4/c7/f4/a4c7f45703cccc05b7182b1d0da6f6cc.jpg',
      name: "virat kohli",
      skill: "batsman",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."

    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/bf/98/8d/bf988d3525eb4035f0c63933cbdeb404.jpg",
      name: "Siraj",
      skill: "Bowler",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."

    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/50/11/59/501159f536ca42a9a46fe81a528872f3.jpg",
      name: "Spider Man",
      skill: "Spidy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."

    }
  ];

  return (
    <div className='parents'>
      {  
      data.map((procuts) => {
        return <Cards key={procuts.id} img={procuts.img} user={procuts.name} skill={procuts.skill} des={procuts.des} />
      })
      }
    </div>
  )
}

export default App
