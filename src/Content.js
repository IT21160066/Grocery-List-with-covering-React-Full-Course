import React from 'react'

const Content = () => {

  const handleNameChange = () => {
    const userNames = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return userNames[int]; //25.29
  }
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content