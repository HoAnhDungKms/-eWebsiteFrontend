import React from 'react';
import{useEffect} from 'react';
import{useState} from 'react';

function Sidebar() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/Category")
        .then(res => res.json())
        .then(
            (result) => {
            setItems(result);
            },
        )
    }, [])
        return (
        <sidebar>
                <div className="container">
                    <div className='s1_header'>
                        <div className='s1_header_title'>
                            Product Category
                        </div>
                    </div>
                </div>
                <div className="_2hR6ab">
                        {items.map(item => (
                            <a key={item.id} href="" onClick={()=>localStorage.setItem('categoryid',item.id)}>
                                <div style={{"width": "100px"}}> 
                                    <div className="_9D1-HY MjGK8Q">
                                        <div className="_25_r8I _1RBcpk">
                                            <div className="_3fOtV7 _2GchKS img">
                                            </div>
                                        </div>
                                    </div>
                                    <div className='_2GYM92 MWc1_R'>
                                        {item.name}
                                    </div>
                                </div>                                     
                            </a>
                       ))}             
                </div>
            
        </sidebar>    
        );
}
export default Sidebar;
