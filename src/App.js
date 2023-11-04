import logo from './logo.svg';
import './App.css';
import Counter from './components.js/Counter';
import CounterFc from './components.js/CounterFc';
import ProductsList from './components.js/ProductsList';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterFc /> */}
      <ProductsList />
    </div>
  );
}

export default App;
