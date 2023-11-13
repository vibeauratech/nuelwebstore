import React from 'react'
import './Home.css'
import Reel from "./HomeImages/Reel.png";
import EArrow from "./HomeImages/eArrow.png";
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';



function Home() {
  return (
    <div>
      <div className='hero'>
        <div className='hero-con'>
          <div className='head-tag'>
            <h1>Leading Online Fashion Store</h1>
            <button>Go Shopping <img src={EArrow} className="eArrow" alt="eArrow" /> </button>
          </div>  

          <div className='head-img'>
            <img src={Reel} className="reel" alt="reel" />
          </div>    
        </div>  
      </div>

      <FeaturedProducts type ="Now selling"/>
      
    </div>
  )
}

export default Home
