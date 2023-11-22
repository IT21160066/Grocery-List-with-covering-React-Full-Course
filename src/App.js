import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

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

      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
