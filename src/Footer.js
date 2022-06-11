import React from 'react';
import './Footer.css'

function Footer() {
  return <div>
      <footer>
        {/*--copyright-----------------*/}
        <span class="copyright">
            Copyright 2021 - Awesome Products
        </span>
        {/*--subscribe----------*/}
        <div class="subscribe">
            <form action="">
                <input type="email" placeholder="Example@gmail.com" required/>
                <input type="submit" value="Subscribe" />
            </form>
        </div>
    </footer>
  </div>;
}

export default Footer;
