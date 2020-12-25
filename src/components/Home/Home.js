import React from 'react';
import styles from './Home.module.css'
const Home = (props) => {
    return (
        <div className={styles.Home}>
            <a href={'/gifts'} >Gifts On The Way</a>
        </div>
    )
}

export default Home;