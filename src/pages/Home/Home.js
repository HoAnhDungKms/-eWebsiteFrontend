import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import '../../App.css';
import Slideshow from '../../components/Slider';

export default function Home() {
  return (
    <div className="App">
        <Header />
        <Slideshow/>
        <Sidebar />
        <Content/>
        <Footer />
    </div>
  )
}
