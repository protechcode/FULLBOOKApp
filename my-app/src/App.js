import logo from './logo.svg';
import './App.css';
import companyLogo from './images/fullEnergyLogo.png';
import nikeshoes from './images/nike-shoes.jpg';
import greenshoe from './images/shoes-shoe-png-transparent-shoe-image.png';
import BannerOneProduct from './components/bannerOneProduct';
import Navbar from './components/navbar'
import Featured from './components/featured';
import Ecommerce from './components/ecommerce';
import BestService from './components/bestService';
import Footer from './components/footer';
import FeaturedTest from './components/featuredTest';


function App() {
  return (
    <div className="App">
      <Navbar/>
      /////////////////////Banner One Product/////////////////////
      <BannerOneProduct/>
      ////////////////////Featured 0 test /////////////
      ////////////////////Featured/////////////////////
      <Featured></Featured>
      /////////////////////Ecommerce////////////////////
      <Ecommerce></Ecommerce>
      /////////////////////Best Service Component/////////////////////
      <BestService></BestService>
      ////////////////////Footer////////////////////////
      <Footer></Footer>
      
    </div>

  )
};

export default App;