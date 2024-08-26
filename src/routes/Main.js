import { useState, useEffect } from "react";
import MainButton from "../components/MainButton";
import styles from "./Main.module.css";

function Main(){
    
    return(
        <div className={styles.mainBar}>
            <div className={styles.bar}>
                <h1>닥터마법사</h1>
            </div>
            <div className={styles.selectOption}>
                <MainButton text="자가진단" routes="SelfDiagnose" />
                <MainButton text="재활운동" routes="Exercise" />
                <MainButton text="내 목표" routes="Goal" />
                <MainButton text="FAQ" routes="FAQ" />
            </div>
        </div>
    )
}

export default Main;