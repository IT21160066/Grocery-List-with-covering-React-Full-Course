import React from 'react'
//import { useState } from 'react';
import Itemlist from './Itemlist'

const Content = ({ items, hanndleCheck, handleDelete }) => {

    //const [name, setName] = useState('Dave');
    //const [count, setCount] = useState(0);
    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: false,
    //         item: 'Cocoa1'
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: 'Cocoa2'
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: 'Cocoa3'
    //     }
    // ])

    // const hanndleCheck = (id) => {
    //     //console.log(`key ${id}`)
    //     const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked}
    //     : item);
    //     setItems(listItems);
    //     localStorage.setItem('shoppingList', JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     //console.log(id)
    //     const listItems = items.filter((item) => item.id !== id)
    //     setItems(listItems);
    //     localStorage.setItem('shoppiingList', JSON.stringify(listItems));
    // }

    // const handleNameChange = () => {
    //     const userNames = ['Bob', 'Kevin', 'Dave'];
    //     const int = Math.floor(Math.random() * 3);
    //     //return userNames[int]; 
    //     setName(userNames[int]);
    // }

    // const handleClick  =  () => {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     console.log(count);
    // }

    // const handleClick2  =  (name) => {
    //     console.log(count);
    // }

    // const handleClick3  =  (e) => {
    //     console.log(e.target.innerText);
    // }

  return (
    <>
        {/* <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click Again</button>
        <button onClick={handleClick2}>Click Again</button> */}
        {items.length ? (
            <Itemlist
                items={items}
                hanndleCheck={hanndleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{
                marginTop: '2rem'
            }}>Your List is Empty</p>
        )}
    </>
  )
}

export default Content