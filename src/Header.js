import React from 'react';
import './Header.css'

function Header() {
  return <div>
      <nav>
        {/* //--social-link-and-phone-number--------------> */}
        <div class="social-call">
            {/* <!--socila-links---------> */}
            <div class="social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            {/* <!--phone number------> */}
            <div class="phone">
                <strong><span>Call +2348055716799</span></strong>
            </div>

        </div>

    {/* <!--menu-bar--------------------------------------------> */}
        <div class="navigation">
            {/* <!--logo------> */}
            <a href="#" >
                <img src="Bright Colored Tumblr Banner (1).png" alt="Logo" class="logo" />
            </a>

            {/* <!--menu-icon------------> */}
            <div class="toggle"></div>


            {/* <!--menu--------> */}
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="./products.html">Categories</a></li>
                <li><a href="#new-products">Featured products</a>
                {/* --sale-label-- */}
                    <span class="sale-label">Sale</span>
                </li>
                
                <li><a href="./About.html">About us</a></li>
                <li><a href="./contact.html">Contact us</a></li>
            </ul>
            {/* <!--right-menu--------> */}
            <div class="right-menu">
                {/* <!--search--> */}
                <a href="javascript:void(0);" class="search">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </div>
    </nav>
    {/* <!--search-bar----------------------------> */}
    <div class="search-bar">
        {/* <!--search-input-----> */}
        <div class="search-input">
            {/* <!--input------> */}
            <input onkeyup="filter()" id="search" type="text" placeholder="Search for Product" />
            {/* <!--cancel-btn--> */}
            <a href="javascript:void(0);" class="search-cancel">
                <i class="fas fa-times"></i>
            </a>
        </div>
    </div>
  </div>;
}

export default Header;
