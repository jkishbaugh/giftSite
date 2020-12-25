import React from 'react';
import present1 from '../../assets/present.png'
import present2 from '../../assets/present2.png'
import styles from './SecondPage.module.css'
import mug from "../../assets/whatsNext.png";
import wws from "../../assets/westwingseries.png";

const SecondPage = (props) => {
    let left = props.option==='a'?
        <a href={"https://www.amazon.com/progress-tracker/package/ref=ppx_yo_dt_b_track_package?_encoding=UTF8&itemId=loqkltkmqnpnon&orderId=113-2511723-5217052&packageIndex=0&shipmentId=DfsV255KK&vt=YOUR_ORDERS"}>
            <img src={mug} alt={'west wing box set'}/>
        </a>:
        <a href={"/gifts/3"}><img src={present1} alt={'present1'}/></a>
    let right = props.option==='b'?
        <a href={"https://www.amazon.com/progress-tracker/package/ref=ppx_yo_dt_b_track_package?_encoding=UTF8&itemId=lopmssmtmlqvon&orderId=113-5068903-0189035&packageIndex=0&shipmentId=DqzwRLSSV&vt=YOUR_ORDERS"}>
            <img src={wws} alt={'west wing box set'}/>
        </a>:
        <a href={"/gifts/3"}><img src={present2} alt={'present2'}/></a>
    return (
        <div className={styles.SecondPage}>
            {left}
            {right}
        </div>
    )
}

export default SecondPage;