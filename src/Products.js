import React from 'react'
import './Products.css'
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';



function Products({ name, image, price, details, rating}) {
    return (
        <div class="container">
            <div class="products__box">
                <div class="picture__box">
                    <div class="star__box"></div>
                    <img src={image}/>
                    
                </div>
                <div class="details__box">
                    <div className='name'><span>{name}</span></div>
                    <div className='type'><span>{price} <br /> {details}</span></div>
                    {/* <div className='rating'><Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly/>
                    </Stack></div> */}
                </div>
            </div>
        </div>
                
            
    )
}

export default Products