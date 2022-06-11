import React from 'react';
import './Promo.css'

function Promo() {
  return <div>
      <section class="sale">
        {/*--sale-box------------*/}
        <div class="sale-box">
            {/*--img-----*/}
            <img src="https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            {/*--text------*/}
            <a href="#">
                <div class="sale-text">
                    <strong>Bag with Rose Pattern</strong>
                    <span>Sale off 25%</span>
                </div>
            </a>
        </div>

        {/*--sale-box------------*/}
        <div class="sale-box">
            {/*--img-----*/}
            <img src="https://images.pexels.com/photos/4397817/pexels-photo-4397817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            {/*--text------*/}
            <a href="#">
                <div class="sale-text">
                    <strong>Bag with Rose Pattern</strong>
                    <span>Sale off 25%</span>
                </div>
            </a>
        </div>

        {/*--sale-box------------*/}
        <div class="sale-box">
            {/*--img-----*/}
            <img src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            {/*--text------*/}
            <a href="#">
                <div class="sale-text">
                    <strong>Bag with Rose Pattern</strong>
                    <span>Sale off 25%</span>
                </div>
            </a>
        </div>
        
    </section>
  </div>;
}

export default Promo;
