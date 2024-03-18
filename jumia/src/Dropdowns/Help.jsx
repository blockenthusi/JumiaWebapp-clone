// import "./App.css"
import { MdPerson } from "react-icons/md";
import { FaBorderTopLeft } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";

const Help = () => {
  return <div className="Tup">
    <div className="up">
      <button>Sign In</button>
      <hr/>
    </div>
<div className="low">
  <div className="tag">
  <MdPerson/>
  <p>My Account</p>
  </div>
 <div className="tag">
 <FaBorderTopLeft />
 <p>Orders</p>
 </div>
  <div className="tag">
  <SlLike />
  <p>Saved Items</p>
  </div>
  
  </div>

  </div>;
};

export default Help;
