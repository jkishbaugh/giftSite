import React from 'react';
import styles from './Home.module.css'
import AliceCarousel from "react-alice-carousel";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"
import img7 from "./img7.jpg"
import img8 from "./img8.jpg"
import img9 from "./img9.jpg"
import img10 from "./img10.jpg"
import img11 from "./img11.jpg"
import img12 from "./img12.jpg"
import img13 from "./img13.jpg"
import img14 from "./img14.jpg"
import img15 from "./img15.jpg"
import img16 from "./img16.jpg"

const Home = (props) => {
    return (
        <div className={styles.Home}>

            <a href={'/gifts'} >Your Gifts</a>
            <AliceCarousel autoPlay autoPlayInterval={"3000"} infinite>
                <img src={img1} className={"sliderimg"} alt={""}/>
                <img src={img2} className={"sliderimg"} alt={""}/>
                <img src={img3} className={"sliderimg"} alt={""}/>
                <img src={img4} className={"sliderimg"} alt={""}/>
                <img src={img5} className={"sliderimg"} alt={""}/>
                <img src={img6} className={"sliderimg"} alt={""}/>
                <img src={img7} className={"sliderimg"} alt={""}/>
                <img src={img8} className={"sliderimg"} alt={""}/>
                <img src={img9} className={"sliderimg"} alt={""}/>
                <img src={img10} className={"sliderimg"} alt={""}/>
                <img src={img11} className={"sliderimg"} alt={""}/>
                <img src={img12} className={"sliderimg"} alt={""}/>
                <img src={img13} className={"sliderimg"} alt={""}/>
                <img src={img14} className={"sliderimg"} alt={""}/>
                <img src={img15} className={"sliderimg"} alt={""}/>
                <img src={img16} className={"sliderimg"} alt={""}/>


            </AliceCarousel>
        </div>
    )
}

export default Home;