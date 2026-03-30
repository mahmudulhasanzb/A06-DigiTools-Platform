import { FaBeer } from 'react-icons/fa'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Stats from './components/Stats/Stats'
import Products from './components/Products/Products'
import Steps from './components/Steps/Steps'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>

      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-3xl font-bold">Premium Digital Products</h2>
          <p className="text-sm text-center text-gray-500 max-w-md line-clamp-2">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary rounded-full bg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
            Products
          </button>
          <button className="btn btn-ghost rounded-full">
            Cart <span>(0)</span>
          </button>
        </div>
        <Products></Products>
      </div>
      <Steps></Steps>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default App
