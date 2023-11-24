import './App.css';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'
import Button from './components/button';
import Screen from './components/screen';
import ButtonClear from './components/buttonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  return (
    <div className='App'>
      <section className='Logo__container'>
        <img 
        src={freeCodeCamplogo} 
        className = 'Logo__container-logo'
        alt = 'Logo of freecodecamp' />
      </section>
      <section className='Container__calculator'>
        <Screen input={input}/>
        <div className='row'>
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>=</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClic={addInput}>Clear</ButtonClear>
        </div>
      </section>
    </div>
  );
}

export default App;
