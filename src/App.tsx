import './App.css';
import { useState, useEffect }from "react"
import Button from './components/button';
import Message from './components/message';

function App() {
  const [clicked, setClicked] = useState(false);

  if (clicked) return (
    <div className="App-body">
      <Message/>
    </div>
  );

  return (
    <div className="App-body">
      <Button clickHandler={() => setClicked(true)}/>
    </div>
  ) 
}

export default App;
