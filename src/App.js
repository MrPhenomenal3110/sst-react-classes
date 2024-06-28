import './App.css';
import Products from './components/Products/Products';
import CartComponent from './components/cartComponent/CartComponent';
import Categories from './components/Categories/Categories';
function App() {
  return (
      <div className="App">
        <Categories />
        <CartComponent />
        <Products  />
        
      </div>
  );
}

export default App;