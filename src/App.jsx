import React from 'react'
import './index.css'

//components
import Navbar from './components/Navbar'
import { Animation01 } from './components/Animation01'
import { Review } from './components/Review'
import { OurProduct } from './components/OurProduct.jsx'
import { OrderWith } from './components/OrderWith.jsx'
import { AboutUs } from './components/AboutUs.jsx'
import { Contact } from './components/Contact.jsx'
import ImpLinks from './components/ImpLinks.jsx'
import Footer from './components/Footer.jsx'

//assets
import func1 from './assets/data/reviewLists.js';
import func2 from './assets/data/product.js';
import logo from './images/icons/logo1.png'



const reviewList = func1();
const productList = func2();
 
const App = () => {
  return (<>
      <Navbar logoSrc = {logo} title="The Kage" navBtn = "order now" myList = {['Home', 'About Us', 'Links' ]} />
      <div className='container'>
        <Animation01 />
        <Review title="Customer Review" myList={reviewList} />
        <OurProduct title="Our Cakes" myList={productList} />
        <OrderWith />
        <AboutUs logo='#' title="The Kage" desc = "I wnat to welcome to all aoa" />
        <Contact location="Patna, Bihar" number="9334833907" />
        <ImpLinks />
        <Footer />
      </div>
   </>
  )
}

export default App