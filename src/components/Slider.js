import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImage = [
    { src: "https://cf.shopee.vn/file/8dfef60ce49085cc1e032acebe01f299_xxhdpi"},
    { src: "https://cf.shopee.vn/file/c1469340cbe007399786120230fa49c2_xxhdpi"},
    { src: "https://cf.shopee.vn/file/cabb3a44c6ef41429abe5ed371bcebd7_xxhdpi"},
    { src: "https://cf.shopee.vn/file/6dc8a119c466ad04b0ef262ba1424b22_xxhdpi"},
  ];
  const Slideshow = () => {
    return (
      <div className="container">
        <br/>
        <br/>
        <br/>       
        <Slide>
         {slideImage.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.src})`,'background-size': 'cover','height':'280pt','background-repeat': 'no-repeat'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;