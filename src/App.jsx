import { useState } from 'react'
import './App.css';
import Cards from './components/cards/Cards';
import Carusel from './components/carusel/Carusel';
import Check from './components/check/Check';
import Chips from './components/chips/Chips';
import Count from './components/count/Count';
import Counter from './components/Counter/Counter';
import Input from './components/input/Input';
import Selector from './components/selector/Selector';
import Toggler from './components/toggler/Toggler';


function App() {
  const [page, setPage] = useState('Toggler');
  const changePage = ()=>{
    switch (page) {
      case 'Toggler':
        return <Toggler />;
      case 'Chips':
        return <Chips />;
      case 'Counter':
        return <Counter />;
      case 'Carusel':
        return <Carusel />;
      case 'Cards':
        return <Cards />;
      case 'Input':
        return <Input />;
      case 'Count':
        return <Count />;
      case 'Selector':
        return <Selector />;
      case 'Check':
        return <Check />;
    }
  }

  return (
      <div className="App">
        <h1>HomeWork(UseRef, UseMemo, UseContext)</h1>
        <div className='App-buttons'>
          <button onClick={()=>setPage("Toggler")}>Toggler</button>
          <button onClick={()=>setPage("Chips")}>Chips</button>
          <button onClick={()=>setPage("Counter")}>Counter</button>
          <button onClick={()=>setPage("Carusel")}>Carusel</button>
          <button onClick={()=>setPage("Cards")}>Cards</button>
          <button onClick={()=>setPage("Input")}>Input saver</button>
          <button onClick={()=>setPage("Count")}>Count</button>
          <button onClick={()=>setPage("Selector")}>Selector</button>
          <button onClick={()=>setPage("Check")}>Check</button>
        </div>
        <div className="App-page-content">{changePage()}</div>
      </div>
  )
}

export default App;
