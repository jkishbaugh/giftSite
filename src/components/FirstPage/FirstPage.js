import React from 'react';
import styles from './FirstPage.module.css'
import present1 from '../../assets/present1.png'
import present2 from '../../assets/present2.png'
const FirstPage = () => {
    return (
        <div className={styles.FirstPage}>
            <a href={"/gifts/1"}> <img src={present1} alt={"present"}/></a>
            <a href={"/gifts/2"}><img src={present2} alt={"present"}/></a>
        </div>
    )
}

export default FirstPage;