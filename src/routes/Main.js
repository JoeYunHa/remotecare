import React from "react";
import {Link} from "react-router-dom";
import HeadImg from "../images/part/head.png";
import Exercise from "../images/button_img/Exercise.png";
import FAQ from "../images/button_img/FAQ.png";
import MyGoal from "../images/button_img/myGoal.png";
import SelfDiagnose from "../images/button_img/selfDiagnose.png";
import NavBar from "../images/part/foot.png";
import styles from "./routes_css/Main.module.css";

function Main(){
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <img className={styles.headImg} src={HeadImg} />
            </div>
            <div className={styles.greeting}>
                <h1 id="userName">김정호</h1>
                <h2>님 오늘도 건강한 하루 보내세요!</h2>
            </div>
            <div className={styles.selectContainer}>
                <Link to={'../routes/SelfDiagnose'} className={styles.mainBtn}>
                    <button className={styles.mainBtn}>
                        <img id="SelfDiagnose" src={SelfDiagnose} />
                    </button>
                </Link>
                <Link to={'../routes/SelfDiagnose'} className={styles.mainBtn}>
                    <button className={styles.mainBtn}>
                        <img id="Exercise" src={Exercise}/>
                    </button>
                </Link>
                <Link to={'../routes/SelfDiagnose'} className={styles.mainBtn}>
                    <button className={styles.mainBtn}>
                        <img id="MyGoal" src={MyGoal}/>
                    </button>
                </Link>
                <Link to={'../routes/SelfDiagnose'} className={styles.mainBtn}>
                    <button className={styles.mainBtn}>
                        <img id="FAQ" src={FAQ}/>
                    </button>
                </Link>
            </div>
            <div className={styles.navBar}>
                <img src={NavBar} />
            </div>
        </div>
    )
}

export default Main;