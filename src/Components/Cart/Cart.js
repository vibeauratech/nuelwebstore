import React from 'react'
import "./Cart.css"
import Delete from "./CartImages/delete.png";

function Cart() {
   const data = [
    {
      id: 1,
      img:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F6e%2F306e66f18d83c9532255579dc92ce19840ab2025.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Jacket",
      isNew: true,
      oldprice: 19,
      price: 20
    },
    
    {
      id: 2,
      img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Fc2%2F4dc2af2c15d84ec83e6112db9704df317353ff68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
      title: "Shoe",
      isNew: true,
      oldprice: 19,
      price: 20
    },

   ];
  
  return (
    <div className='cart'>
     <div className='cart-header'>
     <h1>My Items</h1>
     <button>Reset Cart</button>
     </div>
       {data?.map(item=>(
          <div className="item" key={item.id}>
           <div className='item-text'>
              <img src={item.img} className="" alt="" />
              <div className='cart-details'>
              <p>{item.title}</p>
              <span className='price'>1 * ${item.price}</span>
              </div>
           </div>
           <div className='delete'>
             <img src={Delete} className="" alt="" />
            </div> 
         </div>
       ))}

       <div className='total'>
         <div className='sub-total'>
            <span>Order Value</span>
            <span>$545</span>
         </div>

         <div className='main-total'>
           <span>Total</span>
           <span>$550</span>
         </div>

         <button className='proceed'>Proceed to checkout</button>
        </div>

        
    </div>
  );
};

export default Cart
