import Carousel from "./Carousel";
import { slider } from "../data/carouselData.json";
import { CiApple } from "react-icons/ci";
import { RiHomeOfficeLine } from "react-icons/ri";
import { GiKitchenScale } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { PiTelevisionLight } from "react-icons/pi";
import { GiSkirt } from "react-icons/gi";
import { PiBowlFoodLight } from "react-icons/pi";
import { LuGamepad2 } from "react-icons/lu";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { MdOutlineLocalHospital } from "react-icons/md";
import { useEffect, useState } from "react";


const Hero = () => {
  const [data, Setdata] = useState([]);

  // const newData = data.slice(0, 10);

  

  const url = "https://fakestoreapi.com/products/categories";

  const getApiData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => Setdata(res));
  };
  console.log(data);
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="Hero">
        <div className="Herowrapper">
        
            <div className="Hleft">
            {data.map((e, index) => (
              <div className="drop" key={index}>
                <CiApple className="dro" />
                <p>{e}</p>
              </div>
               ))}
            </div>
         

          <div className="Hmid">
            <Carousel data={slider} />
          </div>
          <div className="Hright">
            <div className="Hup"></div>
            <div className="Hdown"></div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Hero;
