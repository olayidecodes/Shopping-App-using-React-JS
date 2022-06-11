import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Products from './Products';
import Promo from './Promo';
import Services from './Services';
import Footer from './Footer';


function Home() {
  return (<div>
      <Header />
      <Banner />
      <div class="product-container"> 
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
        <Products 
        image='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        name="Drawstring T-Shirt"
        price="$22.00"
        details="Turns voice into text without typing in an instant. Turns voice into text without typing in an instant."
        />
    </div>  


    {/* Promotions Section */}
    <Promo />
    {/* // Services Section */}
    <Services />
    

    <Footer />
  </div>);
}

export default Home;
