import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </BrowserRouter>
    </>
  );
}

export default App;
