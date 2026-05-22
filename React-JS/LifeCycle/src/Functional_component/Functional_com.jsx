/*
There are 3 phases in the React Component LifeCycle

Mounting Phase
Updating Phase
Unmounting Phase

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});


2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state])

*/


import React, { useEffect } from 'react'

function Img_life() {

    // component didmount /birth so auto cal when component load
    useEffect(()=>{
        console.log('Component Birth');
    },[]);

    // component didmount /birth so auto cal when component unload
    useEffect(()=>{
       return(()=> console.log('Component unload'));
    },[]);

    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwL84l73tWyp5uQltmrdAN_FxIlZdPwafGw&s" alt="" width="100px" />
        </div>
    )
}

export default Img_life