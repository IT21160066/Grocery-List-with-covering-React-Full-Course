import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const userNames = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        //return userNames[int]; 
        setName(userNames[int]);
    }

    const handleClick  =  () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2  =  (name) => {
        console.log(count);
    }

    const handleClick3  =  (e) => {
        console.log(e.target.innerText);
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click Again</button>
        <button onClick={handleClick2}>Click Again</button>
    </main>
  )
}

export default Content //a.03.25