import React from 'react'
import "./FeaturedProducts.css"
import Card from '../../Components/Card/Card';




function FeaturedProducts({type}) {
    const data = [
        {
          id: 1,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
        {
          id: 2,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
        {
          id: 3,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },

        {
          id: 4,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
  
        {
          id: 5,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
  
        {
          id: 6,
          img:"",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
  

    ]

  return (
    <div className='featuredproducts'>
        <div className='top'>
            <h1>{type}</h1>
            <div className='filter-sort'>
                <div className='cat-btn'>
                    <button id='jacket'>Jackets</button>
                    <button>Pants</button>
                    <button>T-shirts</button>
                    <button>Shoes</button>
                    <button>Sweatshirts</button>    
                </div>

                <div className='cat'>
                  <button id='jacket'>Jackets</button>  
                </div>

                <div className='sort-bar'>
                    <button> Low - High</button>       
                </div>
            </div>       
        </div> 

        <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}   
        </div>
      
    </div>
  )
}

export default FeaturedProducts
