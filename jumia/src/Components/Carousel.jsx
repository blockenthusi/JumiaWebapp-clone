// import { ThemeContext} from "./Context/Theme";
import React, { useEffect, useState, useContext } from "react";
import "./Carousel.css";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";


const Carousel = ({data}) => {
    const [slide,setSlide]=useState(0)


    const nextSlide = () => {
        setSlide( slide === data.length -1 ? 0 : slide + 1)
    }
      

    const prevSlide = () => {
       setSlide( slide === 0 ? data.length -1 : slide - 1)
    }

    // useEffect(()=>{
    //   setInterval(()=>{
    //     setSlide(slide=> slide+=1)
    //   },5000)
    // },[])
    // const {Theme,darkMode,lightMode}=useContext(ThemeContext)

    return(
    <>
        <div className="carolHolder">
        <div className="carol">
        <SlArrowLeftCircle  className="arrow arrow-left"  onClick={prevSlide}/>
            {data.map((item,idx)=> {
                return  <img src={item.src} alt={item.alt} key={idx}  className={slide === idx ? " slide" : "slide slide-hidden"}/>
            })}

           <SlArrowRightCircle  className="arrow arrow-right" onClick={ nextSlide}/>

           <span className="indicators">
            {data.map((_, idx) => {
                return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
           </span>
        </div>
        </div>
       </> 
    )
}



export default Carousel