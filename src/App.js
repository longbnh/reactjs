// import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Homepage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/cart" component={CartPage}/>
      <Route path="/product/:id" component={ProductPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
