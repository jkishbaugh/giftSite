import React from 'react';
import clImage from '../../assets/christmas-lights.gif'
import styles from './ChristmasHeader.module.css'
const ChristmasHeader = () => {
    return (
        <div className={styles.ChristmasHeader}>
            <img src={clImage} alt={"lights christmasHeader"}/>
        </div>
    )
}

export default ChristmasHeader;