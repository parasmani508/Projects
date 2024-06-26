import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Slider from './components/Slider.js';
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProducts from "./components/StarProducts.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'

function App() {
  return (
   <Router>
    <Prenavbar/>
    <Navbar/>
    <Slider start={data.banner.start}/>
    <Offers offer={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProducts starProduct={data.starProduct}/>
    {/* <Heading text="HOT ACCESSORIES"/> */}
    <HotAccessoriesMenu/>
     {/* <Routes>      */}
      {/* <Route  path="/music"> */}
      <Heading text="Music Store"/>
    <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
    {/* </Route> */}
    {/* </Routes> */}

    <Heading text="Smart Devices"/>
    <HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice}/>
    <Heading text="Home Appliances"/>
    <HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home}/>
    <Heading text="Life Style"/>
    <HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle}/>
    <Heading text="Mobile Accessories"/>
    <HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories}/>
    <Heading text="Product Reviews"/>
    <ProductReviews productReviews={data.productReviews}/>
    <Heading text="VIDEOS"/>
    <Videos videos={data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner banner={data.banner}/>
    <Footer footer={data.footer}/>
    </Router>
  );
}
export  default App;

