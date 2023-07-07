import React from 'react'
import "./FeaturedProducts.css"
import Card from '../../Components/Card/Card';




function FeaturedProducts({type}) {
    const data = [
        {
          id: 1,
          img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2F9c%2Fac9c177b92209da6ada8ff1433cce597aeb60717.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },

        {
          id: 2,
          img:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F43%2Ff2%2F43f29c03ad54f68c93bed29478b249d140a014fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
        {
          id: 3,
          img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Fc2%2F4dc2af2c15d84ec83e6112db9704df317353ff68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },

        {
          id: 4,
          img:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F6e%2F306e66f18d83c9532255579dc92ce19840ab2025.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
  
        {
          id: 5,
          img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2Ff2%2Fb3f2e01c1b2477c0ed1ea0326edc06baca13e7f5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
          title: "jacket",
          isNew: true,
          oldprice: 19,
          price: 20
        },
  
        {
          id: 6,
          img:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd3%2F54%2Fd3542517060f622943b4d4ee19e588a2230d17e0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
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
