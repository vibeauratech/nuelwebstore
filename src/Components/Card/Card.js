import React from 'react'
import "./Card.css"
import {Link } from 'react-router-dom'
import Roadman from "./CardImages/RoadmanImage.png";
import PreviewArrow from "./CardImages/PreviewArrow.png";

function Card({item}) {
  return (
    <Link to= {`./product/${item.id}`}>
        <div className='card'>
          <div className='img-box'>
            <img src={item.img} className="cardImage" alt="" />
          </div>
           <div className='detail-bar'>
              <div>
                <p>Roadman Jack</p>
                <span>$150</span>
              </div>
            
            <div className='price-bar'>
             <button>Preview<img src={PreviewArrow} className="PreviewArrow" alt="arrow" /></button>
            </div>
           </div>
        </div>
    </Link> 
   
  )
}

export default Card
