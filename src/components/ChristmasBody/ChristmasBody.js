import React from 'react';
import styles from './ChristmasBody.module.css'
import {Route, Switch} from "react-router";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import Home from "../Home/Home";

const ChristmasBody = () => {
    return (
        <div className={styles.ChristmasBody}>
            <h1>
                <span className={styles.Green}>M</span>
                <span className={styles.Red}>E</span>
                <span className={styles.Green}>R</span>
                <span className={styles.Red}>R</span>
                <span className={styles.Green}>Y </span>
                <span className={styles.Red}>C</span>
                <span className={styles.Green}>H</span>
                <span className={styles.Red}>R</span>
                <span className={styles.Green}>I</span>
                <span className={styles.Red}>S</span>
                <span className={styles.Green}>T</span>
                <span className={styles.Red}>M</span>
                <span className={styles.Green}>A</span>
                <span className={styles.Red}>S</span>
            </h1>
            <Switch>
                <Route path="/gifts" exact component={FirstPage}/>
                <Route path={"/gifts/1"} render={(props) => <SecondPage option={"a"}/>}/>
                <Route path={"/gifts/2"} render={(props) => <SecondPage option={"b"}/>}/>
                <Route path={"/gifts/3"} render={(props) => <ThirdPage/>}/>
                <Route path={"/"} component={Home}/>
            </Switch>
        </div>
    )
}

export default ChristmasBody;