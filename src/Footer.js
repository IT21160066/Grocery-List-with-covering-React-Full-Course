import React from 'react'

const Footer = ({ length }) => {

  const today = new Date();

  return (
    <div>
    <p>{length} List {length === 1 ? "Item" : "Items"}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </div>
  )
}

export default Footer