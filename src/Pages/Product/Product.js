import React, { useState } from 'react'
import "./Product.css"

function Product() {
   const[selectedImg,setSelectedImg] = useState(0);
   const[quantity,setQuantity] = useState(1);

   const images = [
     "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F08%2F1d%2F081d3c60b449b1a05da77d22ff5f49657fd8661b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
     "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd1%2F22%2Fd122d2459e412f5aad33f895cb2c717b4efb96be.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
   ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='secondary-img'>
          <img src={images[0]} className="sec" alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} className="sec" alt="" onClick={e=>setSelectedImg(1)} />
        </div>
        
        <div className='primary-img'>
         <img src={images[selectedImg]} className="pry" alt="" />
        </div>
      </div>

      <div className='right'>
         <div className='main-info'>
          <h1>Custom  Denim Jacket with fur neck</h1> 
          <p>Color : Light Denim Blue</p>
          <p>Size : Medium</p>
          <span>$150</span> 
         </div>

         <div className='desc-box'>
          <p>Additional Information</p>
          <p>Materials</p>
          <p>Care Guide</p>
         </div>

         
         <div className='item-btn'>
          <button onClick={()=>setQuantity((prev) =>prev === 1 ? 1 : prev-1)}>-</button>
           {quantity}
          <button onClick={()=>setQuantity((prev) =>prev+1)}>+</button>
         </div>

         <div className='item-cta'>
            <button>Add to cart</button>
         </div>


      </div>      
    </div>
  )
}

export default Product
