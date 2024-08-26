import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SelfDiagnose.module.css";

function Pain() {
    var part;
    const onClick = (event) => {
        if (part == undefined) { // 맨 처음 선택하는 경우
            part = document.getElementById(event.target.id);
            part.classList.toggle(`${styles.selectedButton}`);
        }
        else { // 이후 중복 선택을 방지하기 위해 이전 것의 class에서 selectedButton 제거
            part.classList.toggle(`${styles.selectedButton}`);
            part = document.getElementById(event.target.id);
            part.classList.toggle(`${styles.selectedButton}`);
        }
        console.log(part);
    }
    return (
        <div>
            <div>
                <div className={styles.bar}>
                    <h1>닥터마법사</h1>
                    <h4>증상에 따른 운동, 병원, 운동기구 추천을 원하시나요?</h4>
                </div>
                <h3 className={styles.explain}>다음 중 증상을 선택해주세요. (중복 선택 불가)</h3>
                <form className={styles.selectOption}>
                    <input className={styles.button} onClick={onClick} id="neck" type="button" value="근육통" />
                    <input className={styles.button} onClick={onClick} id="shoulder" type="button" value="운동반경" />
                    <input className={styles.button} onClick={onClick} id="elbow" type="button" value="붓기" />
                    <input className={styles.none} onClick={onClick} id="none" type="button" value="통증" />
                    <Link to="../routes/SelfDiagnose">
                        <button className={styles.prevButton}>이전단계</button>
                    </Link>
                    <Link to= "../routes/Recommend">
                        <button className={styles.nextButton}>결과보기</button>
                    </Link>
                </form>
            </div>
        </div>

    )
}

export default Pain;