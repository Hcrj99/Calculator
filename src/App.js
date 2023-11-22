import './App.css';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'
import Button from './components/button';

function App() {
  return (
    <div className='App'>
      <section className='Logo__container'>
        <img 
        src={freeCodeCamplogo} 
        className = 'Logo__container-logo'
        alt = 'Logo of freecodecamp' />
      </section>
      <section className='Container__calculator'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </section>
    </div>
  );
}

export default App;
