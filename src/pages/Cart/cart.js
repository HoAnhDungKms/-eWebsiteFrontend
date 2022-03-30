import React from 'react'
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

export default function cart() {
  return (
    <div className="App">
      <Header />
      <div style={{ 'marginBottom': '300px', 'display': 'inline-block' }}>
        <Cart />
      </div>
      <div style={{'marginTop': '40px' }}>
        <Footer />
      </div>
    </div>
  )
}
