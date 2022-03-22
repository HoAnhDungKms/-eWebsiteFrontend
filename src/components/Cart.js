import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import img from '../Img/9f48fd6a-e80f-402a-b8d3-f0460281eb1d.jpg'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Cart() {
    const [quantities , setquantities] = useState(1)
    const plus = () => {
        setquantities(quantities + 1)
    }
    const minus =() =>{
        setquantities(quantities - 1)
    }
    return (
        <div className='_3ojYn-'>
            <div className='cart-page-header-wrapper container-wrapper'>
                <div className='container'>
                    <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                        <div className='cart-page-header'>
                            <a href='/home' className='cart-page-logo'>
                                <div></div>
                                <AiOutlineHome style={{ 'height': '33px', 'width': '33px' }} />
                                <div className="cart-page-logo__page-name">Giỏ hàng</div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <div className="_2eZQze">
                        <div className="_2cHnzN">Sản phẩm</div>
                        <div className="_2UJcxH">Đơn giá</div>
                        <div className="_1SKeIp">Số lượng</div>
                        <div className="_2LUhSC">Số tiền</div>
                        <div className="HHdkhO">Thao tác</div>
                    </div>
                    <div className="_1glehh">
                        <div className="_1BehlF VXs3As">
                            <div className="_-0yJ2-">
                                <div className="_1Lgvsy"></div>
                                <div className="_1Z2fe1">
                                    <div className="_3mceb9">
                                        <a title="Lót chuột led rgb, pad chuột cỡ lớn 50 mẫu full box 90x40 80x30 ♥️ FREESHIP ♥️ siêu dày, bền chống nước" href="/Lót-chuột-led-rgb-pad-chuột-cỡ-lớn-50-mẫu-full-box-90x40-80x30-♥️-FREESHIP-♥️-siêu-dày-bền-chống-nước-i.357915542.3980193155">
                                            <div ><img className="_25vezo" src={img} /></div>
                                        </a>
                                        <div className="_1WfuBi">
                                            <a className="_3t5Sij" title="Lót chuột led rgb, pad chuột cỡ lớn 50 mẫu full box 90x40 80x30 ♥️ FREESHIP ♥️ siêu dày, bền chống nước" href="/Lót-chuột-led-rgb-pad-chuột-cỡ-lớn-50-mẫu-full-box-90x40-80x30-♥️-FREESHIP-♥️-siêu-dày-bền-chống-nước-i.357915542.3980193155">Lót chuột led rgb, pad chuột cỡ lớn 50 mẫu full box 90x40 80x30 ♥️ FREESHIP ♥️ siêu dày, bền chống nước</a>
                                            <div className="_21GC7u" ></div>
                                            <div className="fRkQR_">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="_34KJXV">
                                    <div className="aUj6f2">
                                        <div></div>
                                    </div>
                                </div>
                                <div className="_1C6zuo"><div>
                                    <span className="_1E5-FE _1PSxs0" style={{ 'marginRight': '38px' }}>₫300.000</span>
                                </div>
                                </div>
                                <div className="_2vZsK0">
                                    <div className="_1knJ1D shopee-input-quantity">
                                        <button className="_2rGMck"  onClick={plus}><AiOutlinePlus/></button>
                                        <p className="_2rGMck _8rdz59" type="text" id='quantity'>{quantities}</p>
                                        <button className="_2rGMck" onClick={minus}><AiOutlineMinus /></button>
                                    </div>
                                </div>
                                <div className="_2S6DJl">
                                    <span style={{ 'marginRight': '42px' }}>₫179.000</span>
                                </div>
                                <div className="_1-z5aG _1AeN8q">
                                    <button className="Lur7Ey">Xóa</button>
                                    <div className="_2JDie8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="_1fU7BV"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
