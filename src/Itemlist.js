import React from 'react'
import LineItem from './LineItem'

const Itemlist = ({ items, hanndleCheck, handleDelete }) => {
  return (
    <ul>
        {items.map((item) => (
            <LineItem
                key={item.id}
                item={item}
                hanndleCheck={hanndleCheck}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default Itemlist//2.01.20