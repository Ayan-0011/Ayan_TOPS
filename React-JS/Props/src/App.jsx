import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <div className='parents'>
        <Card  user="Ayan Ansari" skill="Frontend" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."  img='https://png.pngtree.com/recommend-works/png-clipart/20250701/ourmid/pngtree-national-flag-of-india-png-image_16591645.webp' />
        <Card  user="virat kohli " skill="batsman" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."  img='https://i.pinimg.com/474x/a4/c7/f4/a4c7f45703cccc05b7182b1d0da6f6cc.jpg' />
        <Card  user="Siraj" skill="Bowler" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."          img="https://i.pinimg.com/736x/bf/98/8d/bf988d3525eb4035f0c63933cbdeb404.jpg" />
        <Card  user="Spider Man" skill="Spidy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos."      img="https://i.pinimg.com/736x/50/11/59/501159f536ca42a9a46fe81a528872f3.jpg" />
    </div>
  )
}

export default App
