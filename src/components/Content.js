import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from '../Img/9f48fd6a-e80f-402a-b8d3-f0460281eb1d.jpg'

function Content() {
    const [product, setProduct] = useState([]);
    const [productsearch , setProductSearch] = useState([])
    const [listproducts, setListproducts] = useState([]);
    var categoryId = localStorage.getItem('categoryid')
    if (categoryId == null) {
        categoryId = "1002";
    }
    useEffect(() => {
        fetch(`http://localhost:5000/api/Product/${categoryId}/categories`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProduct(result)
                    setProductSearch(result)
                }
            )
    }, [categoryId])
    useEffect(() => {
        fetch(`http://localhost:5000/api/Product`)
            .then(res => res.json())
            .then(
                (result) => {
                    setListproducts(result)
                }
            )
    }, [])
    const storagecart = JSON.parse(localStorage.getItem('cart'))
    const [carts, setCarts] = useState(storagecart ?? [])
    const handleSubmit = (id) => {
        setCarts(prev => {
            const newproduct = [...prev, id]
            const jsoncart = JSON.stringify(newproduct)
            localStorage.setItem('cart', jsoncart)
            return newproduct
        })
        alert("Add cart successfully!!!")
    }
    return (
        <article className='container'>
            <div>
                <div className='s1_header'>
                    <div className='s1_header_title'>
                        Product
                        <div style={{ 'float': 'right' }}>
                            <input id="search" placeholder="Search..." style={{ 'marginLeft': '724px', 'width': '256px' }} onChange={(e) => {
                                let results = [];
                                let value = e.target.value;
                                listproducts.filter((option) => {
                                    [option].forEach(element => {
                                        if(element.name.toLowerCase().includes(value.toLowerCase())){
                                            results.push(option);
                                        }
                                        else if(element.price.toLocaleString().includes(value.toLocaleString())){
                                            results.push(option);
                                        }
                                    });
                                })
                                results.sort((a, b) => {
                                    const nameA = a.name.toLowerCase(); // ignore upper and lowercase
                                    const nameB = b.name.toLowerCase(); // ignore upper and lowercase
                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }

                                    return 0;
                                })
                                if(value != ''){
                                    setProduct(results);
                                }else{
                                    setProduct(productsearch);
                                }
                                
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <section className='stardust-tabs-panels__panel'>
                    <div className='_2O4FYU'>
                        {product.map((products) => (
                            <div className='_2x8AVA' key={products.id}>
                                <div>
                                    <div className="_1C-0ut _3GgDBN">
                                        <div className="_1gZS6z _1rL6dF">
                                            <div className="_25_r8I ggJllv">
                                                <img src={img} className="_3-N5L6 _2GchKS" />
                                                <div className="_3_Th2m">
                                                </div>
                                            </div>
                                            <div className="_2x8wqR">
                                                <div className="_3GAFiR">
                                                    <div className="ZG__4J">
                                                        <div className="_10Wbs- _3IqNCf">{products.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_7rV1tW _3_FVSo">
                                                    <div className="zp9xm9 _2Dfuwn">
                                                        <span className="_3DgLDE">{products.price.toLocaleString()}</span><span className="_19hRcI">₫</span>
                                                    </div>
                                                    <div className="_1uq9fs _3yTzjb">
                                                        <a onClick={() => handleSubmit(products.id)}><AiOutlineShoppingCart /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </article >
    );
}

export default Content;