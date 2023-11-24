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
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ButtonClear>Clear</ButtonClear>
        </div>
      </section>
    </div>
  );
}

export default App;
