
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md"

const Productpage = () => {
    const [data, setdata] = useState([])
    const products = data.slice(9, 17)
    const [pop, setPop] = useState(false)
    const [info, setInfo] = useState([])
     


    const Url = "https://fakestoreapi.com/products"

    const getAllProducts = () => {
        fetch(Url)
        .then((res) => res.json())
        .then((product) => setdata(product))
        .catch((err) => console.log(err))
    }

    const getSingleProducts = (id) => {
        const UrlSingle = `https://fakestoreapi.com/products/${id}`

        fetch(UrlSingle)
        .then((res) => res.json())
        .then((products) =>setInfo(products))
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getAllProducts()
        getSingleProducts()
    }, [])
    console.log(data)
console.log(info)


    return(
        <>
        <div className="pageHolder">
        <div className="pageWrap">
            <div className="leftie">
                <div className="leftWrap">
                <div className="top">
                    <div className="cardie">
                        <div className="image">
                        <img src="https://ng.jumia.is/cms/0-0-black-friday/2023/generic/ezgif.com-optimize.gif"  alt="display"/>
                        </div>
                        <div className="test">
                        <p>Black Friday</p>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="cardie">
                       <div className="image">
                        <img src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/clearance.gif" alt="display"/>
                    </div>
                    <div className="test">
                        <p>Clearance Sale</p>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className="rightie">
               <div className="rightWrap">
                {products.length <= 0 ? <>
                 <div className="loading">Loading....</div>
                </>
                :

                <>
                                { 
                   products?.map((data)=>(

                    <div className="card" key={data.id} onClick={()=>{setPop(true); getSingleProducts(data.id)}}>
                     <div className="imagee">
                         <img src={data.image} alt="" />
                     </div>
                     <div className="teste">
                         <p>{data.title}</p>
                     </div>
                  </div>
                   ))
                     
                   }
                </>

                
                }
                
               </div>
            </div>
        </div>
                {
                    pop?
                    
        <div className="detailHolder">
        <div className="detailWrap">
            <div className="left">
                <div className="leftImage">
                <img src={info.image} alt=""/>
                </div>

                <div className="leftDown">
                    <div className="imgRow">
                        <img src={info.image} alt=""></img>
                        <img src={info.image} alt=""></img>
                        <img src={info.image} alt=""></img>
                        
                    </div>
                    <hr />

                    <div className="textt">
                        <p style={{fontWeight: "700"}}>Share This Product</p>
                        <div className="icons">
                        <RiFacebookCircleLine  style={{fontSize: "30px"}}/>
                        <TiSocialTwitterCircular style={{fontSize: "35px"}}/>
                        
                        </div>
                    </div>

                </div>
            </div>
            <div className="right">
                <div className="heading">
                    <div className="links">
                    <a href="#" className="link1">Official Store</a>
                    <a href="#" className="link2">Black friday deal</a>
                    </div>
                   <div className="iconie" onClick={()=>setPop(false)}>
                   <GiCancel  style={{color: "orange", cursor: "pointer"}}/>
                   </div>
                </div>
                <div className="second">
                    <h1>XIAOMI Redmi A2 + 6.52" 3GB RAM/64GB ROM</h1>
                    <h2>Android 12 - Blue</h2>
                    <p style={{color: "black", fontSize: "12px", marginTop: "2%"}}>Brand: <span style={{color:"blue"}}>XIAOMI | Similiar products from XIAOMI</span></p>
                    <hr/>
                    
                    <div className="prices">
                        <p style={{color:"black", fontSize:"20px", fontWeight:"900"}}># 99,000</p>
                        <p style={{color:"grey", fontSize:"14px", textDecoration: "line-through"}}># 100,900</p>
                        <p style={{color:"red", fontSize:"12px",backgroundColor: "bisque"}}>-2%</p>
                    </div>
                    <div className="price">
                    <BsExclamationCircle />
                        <p>3 units Left</p>
                    </div>
                    <p  style={{color:"black", fontSize:"12px", paddingBlockStart: "5px"}}>+ shipping from #250 to Lekki-AJAH (SANGOTEDO) </p>
                    <div className="stars">
                        <p style={{color: "yellow", fontSize:"12px", paddingBlockStart: "5px"}}><IoIosStar  />  <IoIosStar />  <IoIosStar />  <IoIosStar />  <IoIosStar /> <span style={{fontSize:"12px", color:"blue"}}>(21 verified ratings)</span></p>
                        <div className="btn"><button><MdOutlineShoppingCartCheckout style={{fontSize:"30px"}}/>ADD TO CART</button></div>
                    </div>
                    
                    <div className="lasties">
                    <hr/>
                    <h5>PROMOTIONS</h5>
                    <div className="last">
                        
                        <h6>Need Extra money? Loan up to #500,000 on the JumiaPay Andriod app.</h6> 
                    </div>
                    <div className="last"> 
                    <h6>Enjoy cheaper shipping fees when you select a PickUp Station at Checkout</h6>
                    </div>
                    <div className="last">
                    <h6>Transfer up to 200,000 to any bank in Nigeria for Free</h6>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>:null

                }
        </div>
        
        </>
    )
}




export default Productpage