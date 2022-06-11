import React from 'react';
import './Services.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Services() {
  return <div>
      {/*--services-----------------------------------------------------*/}
    <section class="services">
        {/*--services-box-1-------------*/}
        <div class="services-box">
            <ShoppingCartIcon />
            <span>Best products</span>
            <p>Coolest items on the market</p>
        </div>

        {/*--services-box-2-------------*/}
        <div class="services-box">
            <SavingsIcon />
            <span>Economical</span>
            <p>Low cost and affordable</p>
        </div>

        {/*--services-box-3-------------*/}
        <div class="services-box">
            <LocalShippingIcon />
            <span>Legit Affiliation</span>
            <p>With Amazon,Aliexpress,etc</p>
        </div>

    </section>
  </div>;
}

export default Services;
