import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'Cocoa1'
        },
        {
            id: 2,
            checked: false,
            item: 'Cocoa2'
        },
        {
            id: 3,
            checked: false,
            item: 'Cocoa3'
        }
  ]);

  const hanndleCheck = (id) => {
        //console.log(`key ${id}`)
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked}
        : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

  const handleDelete = (id) => {
        //console.log(id)
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems);
        localStorage.setItem('shoppiingList', JSON.stringify(listItems));
  }

  // const name = 'kamal';
  const handleNameChange = () => {
    const userNames = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return userNames[int]; //25.29
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
         Hello {handleNameChange()}!
        </p>
        
      <p>{[1,2,3]}</p>
      <p>{{a: 1, b: 2}}</p>
      <p>{2 === 4}</p>
      <p>{name}</p>
      </header> */}

      <Header title='Groceries List'/>
      <Content 
        items={items}
        hanndleCheck={hanndleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
