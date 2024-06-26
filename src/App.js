import './App.css';
import Products from './components/Products/Products';
import CartComponent from './components/cartComponent/CartComponent';
function App() {
  return (
      <div className="App">
        <CartComponent />
        <Products  />
      </div>
  );
}

export default App;