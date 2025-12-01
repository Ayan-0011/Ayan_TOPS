import React, { useState } from 'react'

const User = () => {
    const [num, setnum] = useState({user:"ayan",age:20});

    function add(){
        const newuser = {...num}
        newuser.user="Ansari"
        newuser.age=55;
        setnum(newuser)
        
    }


  return (
    <div>
        <p>{num.user} {num.age}</p>
        <button onClick={add}>add</button>
    </div>
  )
}

export default User
