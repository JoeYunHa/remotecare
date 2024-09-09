import React from "react";
// import {Link} from "react-router-dom";
// import HeadImg from "../images/part/head.png";
// import Exercise from "../images/button_img/Exercise.png";
// import FAQ from "../images/button_img/FAQ.png";
// import MyGoal from "../images/button_img/myGoal.png";
// import SelfDiagnose from "../images/button_img/selfDiagnose.png";
// import NavBar from "../images/part/foot.png";
import styles from "./routes_css/Main.module.css";

function Main(){
    return(
        <div id={styles.wrapper}>
            <div id={styles.container}>
                <div className={styles.header}>
                    <h1 id="mainTheme">닥터마법사</h1>
                </div>
                <div className={styles.greeting}>
                    <h1 id="userName">김정호</h1>
                    <h2>님 오늘도 건강한 하루 보내세요!</h2>
                </div>
                <div className={styles.selectContainer}>
                    <div className={styles.select}>
                        <div className={styles.div1}> </div>
                        <div className={styles.div2}> </div>
                        <div className={styles.div3}> </div>
                        <div className={styles.div4}> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;