import logo from './logo.svg';
import './App.css';

function App() {

  // const name = 'kamal';
  const handleNameChange = () => {
    const userNames = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return userNames[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello {handleNameChange()}!
        </p>
        
      {/* <p>{[1,2,3]}</p> */}
      {/* <p>{{a: 1, b: 2}}</p> */}
      {/* <p>{2 === 4}</p> */}
      {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
