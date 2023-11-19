import './App.css';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
      <section className='Logo__container'>
        <img 
        src={freeCodeCamplogo} 
        className = 'Logo__container-logo'
        alt = 'Logo of freecodecamp' />
        <section className='Container__calculator'>

        </section>
      </section>
    </div>
  );
}

export default App;
