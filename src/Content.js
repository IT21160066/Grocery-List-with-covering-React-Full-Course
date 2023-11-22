import React from 'react'

const Content = () => {

  const handleNameChange = () => {
    const userNames = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return userNames[int]; //25.29
  }

  const handleClick  =  () => {
    console.log('You clicked it');
  }

  const handleClick2  =  (name) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3  =  (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('John')}>Click Again</button>
        <button onClick={(e) => handleClick3(e)}>Click Again</button>
    </main>
  )
}

export default Content