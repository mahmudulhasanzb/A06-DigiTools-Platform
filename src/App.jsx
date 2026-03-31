import { FaBeer } from 'react-icons/fa';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Stats from './components/Stats/Stats';
import Products from './components/Products/Products';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';
import OptionalSection from './components/OptionalSection/OptionalSection';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

const getProductData = async () => {
  const res = await fetch('data.json');
  return res.json();
};
const productDataPromise = getProductData();

function App() {
  const [activeCard, setActiveCard] = useState('product');
  const [cards, setCards] = useState([]);

  return (
    <>
      <NavBar cards={cards} setActiveCard={setActiveCard}></NavBar>
      <Banner></Banner>
      <Stats></Stats>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-4xl font-bold">Premium Digital Products</h2>
            <p className="text-md text-center text-gray-500 max-w-md line-clamp-2">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>
          <div className="tabs tabs-box justify-center gap-8 bg-transparent ">
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-24 sm:w-30 ${activeCard === 'product' && 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'}`}
              aria-label="Products"
              defaultChecked
              onClick={() => setActiveCard('product')}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-24 sm:w-30 ${activeCard === 'cart' && 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'}`}
              aria-label={`Cart (${cards.length})`}
              onClick={() => setActiveCard('cart')}
            />
          </div>
        </div>
        {/* Products and cart section will colditionally render here */}
        {activeCard === 'product' ? (
          <Products
            productDataPromise={productDataPromise}
            cards={cards}
            setCards={setCards}
          ></Products>
        ) : (
          <Cart cards={cards} setCards={setCards}></Cart>
        )}
      </div>

      <Steps></Steps>
      <Pricing></Pricing>
      <OptionalSection></OptionalSection>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
