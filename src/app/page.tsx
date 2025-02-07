
import React from 'react'
import Hero from './components/hero'
import Logo from './components/logo'
import Feature_products from './components/feature_products'
import Top_categaries from './components/top_categaries'
import Popular_style from './components/popular_style'
import Our_product from './components/our_product'


export default function page() {
  return (
    <div>
      <Hero/>
      <Logo/>
      <Feature_products/>
      <Top_categaries/>
      <Popular_style/>
      <Our_product/>
    </div>
  )
}

