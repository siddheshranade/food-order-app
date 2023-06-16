import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartModal from './components/Cart/CartModal';

function App() {
  return (
    <>
      <CartModal/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;