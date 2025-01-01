
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Logo from './components/logo'
import Footer from './components/footer'
import Feature_products from './components/feature_products'
import Top_categaries from './components/top_categaries'
import Popular_style from './components/popular_style'
import Our_product from './components/our_product'


export default function page() {
  return (
    <div>
     <Navbar/> 
      <Hero/>
      <Logo/>
      <Feature_products/>
      <Top_categaries/>
      <Popular_style/>
      <Our_product/>
      <Footer/>
    </div>
  )
}

