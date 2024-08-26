import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SelfDiagnose.module.css";

function SelfDiagnose(){
    var part;
    const onClick = (event) => {
        if(part == undefined){ // 맨 처음 선택하는 경우
            part = document.getElementById(event.target.id);
            part.classList.toggle(`${styles.selectedButton}`);
        }
        else{ // 이후 중복 선택을 방지하기 위해 이전 것의 class에서 selectedButton 제거
            part.classList.toggle(`${styles.selectedButton}`);
            part = document.getElementById(event.target.id);
            part.classList.toggle(`${styles.selectedButton}`);
        }
        console.log(part);   
    }
    return(
        <div>
            <div>
                <div className={styles.bar}>
                    <h1>닥터마법사</h1>
                    <h4>증상에 따른 운동, 병원, 운동기구 추천을 원하시나요?</h4>
                </div>
                <h3 className={styles.explain}>다음 중 진단 부위를 선택해주세요. (중복 선택 불가)</h3>
                <form className={styles.selectOption}>
                    <input className={styles.button} onClick={onClick} id="neck" type="button" value="목" />
                    <input className={styles.button} onClick={onClick} id="shoulder" type="button" value="어깨" />
                    <input className={styles.button} onClick={onClick} id="elbow" type="button" value="팔꿈치" />
                    <input className={styles.button} onClick={onClick} id="wrist" type="button" value="손목" />
                    <input className={styles.button} onClick={onClick} id="waist" type="button" value="허리" />
                    <input className={styles.button} onClick={onClick} id="knee" type="button" value="무릎" />
                    <input className={styles.button} onClick={onClick} id="ankle" type="button" value="발목" />
                    <input className={styles.button} onClick={onClick} id="toe" type="button" value="발가락" />
                    <Link to="/">
                        <button className={styles.prevButton}>이전단계</button>
                    </Link>
                    <Link to="../routes/Pain">
                        <button className={styles.nextButton}>다음단계</button>
                    </Link>
                </form>
            </div>
        </div>

    )
}

export default SelfDiagnose;