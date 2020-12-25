import React from 'react';
import styles from './ThirdPage.module.css';
import wws from '../../assets/westwingseries.png'
import mug from '../../assets/whatsNext.png'


const ThirdPage = () => {
    return (
    <div className={styles.ThirdPage}>
        <a href={"https://www.amazon.com/progress-tracker/package/ref=ppx_yo_dt_b_track_package?_encoding=UTF8&itemId=loqkltkmqnpnon&orderId=113-2511723-5217052&packageIndex=0&shipmentId=DfsV255KK&vt=YOUR_ORDERS"}>
            <img src={mug} alt={'west wing box set'}/>
        </a>
        <a href={"https://www.amazon.com/progress-tracker/package/ref=ppx_yo_dt_b_track_package?_encoding=UTF8&itemId=lopmssmtmlqvon&orderId=113-5068903-0189035&packageIndex=0&shipmentId=DqzwRLSSV&vt=YOUR_ORDERS"}>
            <img src={wws} alt={'west wing box set'}/>
        </a>
    </div>
    )
}
export default ThirdPage