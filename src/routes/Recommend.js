import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SelfDiagnose.module.css";
import videoImg from "../img/video_img.jpg";
import tapeVideoImg from "../img/tape_video_img.jpg";

function Recommend() {
    var part;
    const onClick = (event) => {
        window.open("https://youtu.be/uFyncEbCINI");
    }
    return (
        <div>
            <div>
                <div className={styles.bar}>
                    <h1>닥터마법사</h1>
                    <h4>증상에 따른 운동, 병원, 운동기구 추천을 원하시나요?</h4>
                </div>
                <h3 className={styles.explain}>다음 중 증상을 선택해주세요. (중복 선택 불가)</h3>
                <div className={styles.recommendResult}>
                    <h4>추천 재활 운동</h4>
                    <h6 style={{
                        marginLeft: '10px',
                        marginBottom: '0px',
                        color: '#CCCCCC'
                    }}>발목 인대 강화 운동</h6>
                </div>
                <div style={{
                    backgroundColor: '#f5f5f5',
                    margin: '0px'
                }}>
                    <img className={styles.videoImg} onClick={onClick} src={videoImg} />
                </div>
                <div className={styles.recommendResult}>
                    <h4>보조 테이핑 방법</h4>
                    <h6 style={{
                        marginLeft: '10px',
                        marginBottom: '0px',
                        color: '#CCCCCC'
                    }}>발목 인대 꺽임 보조 테이핑</h6>
                </div>
                <div style={{
                    backgroundColor: '#f5f5f5',
                    margin: '0px'
                }}>
                    <img className={styles.videoImg} onClick={onClick} src={tapeVideoImg} />
                </div>
            </div>
        </div>

    )
}

export default Recommend;