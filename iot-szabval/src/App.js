
import Nevbar from './Navbar';
import Simple from './Simple';
import Cards from './Cards';
import Container from './Container';

function App() {
  

  return (
    <div className="App">
      <Nevbar/>
      <div className='content'>
        <Container/>
        <Simple/>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
