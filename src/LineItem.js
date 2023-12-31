import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({ item, hanndleCheck, handleDelete }) => {
  return (
    <li className='item'>
        <input 
            type="checkbox"
            onChange={()=> hanndleCheck(item.id)}
            checked={item.checked} //boolean value                       
        />
        <label
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onDoubleClick={()=> hanndleCheck(item.id)}
        >
        {item.item}</label>
        <FaTrashAlt 
            onClick={()=> handleDelete(item.id)}
            role='button' 
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem