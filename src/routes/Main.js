import React from "react";
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
                <div className={styles.footer}>
                    <div className={styles.img_container}>
                        <img src={require("../img/icon/home.png")} />
                        <h1 style={{textAlign:"center"}}>홈</h1>
                    </div>
                    <div className={styles.img_container}>
                        <img src={require("../img/icon/search.png")} />
                        <h1 style={{ textAlign: "center" }}>검색</h1>
                    </div>
                    <div className={styles.img_container}>
                        <img src={require("../img/icon/bubble-chat.png")} />
                        <h1 style={{ textAlign: "center" }}>상담</h1>
                    </div>
                    <div className={styles.img_container}>
                        <img src={require("../img/icon/user.png")} />
                        <h1 style={{ textAlign: "center" }}>마이페이지</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;