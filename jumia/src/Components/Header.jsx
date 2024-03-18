import vid from "./headvid.gif";
import { MdPerson } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import Help from "../Dropdowns/Help";
import Account from "../Dropdowns/Account";
import { useEffect, useState } from "react";
import jumiah1 from "../assets/jumiah1.png"
import { IoIosArrowDown } from "react-icons/io";
import paybg from "../assets/paybg.png"
import { FaGooglePay } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiSpeedBoat } from "react-icons/gi";
import { ThemeContext } from "./Context/Theme"
import { useContext } from "react";


const Header = () => {

    const [helper,setHelper]=useState(false)

   const showHelp =()=>{
    setHelper(!helper)
   }

   const [account,setAccount]=useState(false)

   const showAccount =()=>{
    setAccount(!account)
   }
 
   const {Theme, darkMode, lightMode}=useContext(ThemeContext)


   const headerTheme = {
    backgroundColor: Theme === "light" ? "blue" : "black",
    color: Theme === "light" ? "white" : "red"
   }

  return (
    <>
      <div className="headerHolder">
        <div className="topHolder">
          <div className="topWrap">
            <img src={vid} alt="" className="vid" />
          </div>
        </div>

        <div className="midHolder" style={headerTheme}>
          <div className="midWrap">
            <div className="midLeft">
              <div className="jummy">
                {/* <img src={jujU} alt="" />                    */}
                <p style={{color: "#F68B1E", fontSize:"12px"}}>Sell On Jumia</p>
              </div>
              <div className="jums">
                <div className="jums1">
                <img src={jumiah1} alt="" />
                  
                </div>
                <div className="jums1">
                 <FaGooglePay style={{fontSize:"50px", color: "gray", fontWeight: "900"}}/> 
                </div>
                <div className="jums1">
                <IoFastFood  style={{color: "grey"}}/>
                <p style={{color: "gray", fontSize: "15px", fontWeight: "900"}}>FOOD</p>
               
                </div>
                <div className="jums1">
                <GiSpeedBoat />
                <p style={{color: "gray", fontSize: "15px", fontWeight: "900"}}>LOGISTICS</p>
                  
                </div>
                {Theme === "light" ? (<p  onClick={()=> darkMode()} style={{cursor: "pointer"}}>LightMode</p>): (
                  <p onClick={()=> lightMode()} style={{cursor: "pointer"}}>DarkMode</p>
                )}
               
               
              
               
              </div>
            </div>
            <div className="midRight"></div>
            
          </div>
        </div>

        <div className="botHolder">
          <div className="botWrap">
            <div className="bot">
              <img src={jumiah1} alt="" />
            </div>
            <div className="bot1">
              <input
                type="text"
                className="botInp"
                placeholder="search here for your products "
              />
              <button className="botBtn">Search </button>
            </div>
            <div className="bot2"  >
              <div className="spacer" onClick={showHelp}>
                <MdPerson className="dro"/>
                <p>Account</p>
                 <IoIosArrowDown/> 
                {helper && <Help/> }
                
              </div>
              <div className="spacer" onClick={showAccount}>
                <FaRegQuestionCircle className="dro"/>
                <p>Help</p>
                <IoIosArrowDown />
                {account && <Account/> }
              </div>
              <div className="spacer">
                <FaShoppingCart className="dro" />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
