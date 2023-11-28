import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const hanndleCheck = (id) => {
      //console.log(`key ${id}`)
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
      setItems(listItems);
    }

  const handleDelete = (id) => {
      //console.log(id)
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
    console.log('submitted');
  }

  return (
    <div className="App">

      <Header title='Groceries List'/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        hanndleCheck={hanndleCheck}
        handleDelete={handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
