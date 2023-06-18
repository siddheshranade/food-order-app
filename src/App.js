import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartModal from './components/Cart/CartModal';
import CartProvider from './store/CartProvider';

function App() {
  const [cartModalShown, setCartModalShown] = useState(false);

  const showCartModalHandler = () => {
    setCartModalShown(true);
  }

  const hideCartModalHandler = () => {
    setCartModalShown(false);
  }

  return (
    <CartProvider>
      {cartModalShown && <CartModal onClose={hideCartModalHandler} />}
      <Header onShowCart={showCartModalHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;