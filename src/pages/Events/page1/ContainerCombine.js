import styles from '../EventDetails.module.css';

import Map from '../Map'

function ContainerCombine(){

    return(
        <div>
            {/* line */}
            <div id={styles.logo}></div>;

            {/* content */}
            <div className={styles.contentContainer}>
                <div id={styles.imageContainer}>
                <img id={styles.image} src="/images/EventDetails/groom.png" alt="Image" />
                    <div id={styles.textContainer}>
                        <h2 id={styles.contentTitle}>9UAP : 구름톤유니브 에프터 파티</h2>
                        <br />
                        <p className={styles.boldText}>장소</p>
                        <p className={styles.grayText}>구름스퀘어 판교</p> 
                        <br />
                        <p className={styles.boldText}>일시</p>                            
                        <p className={styles.grayText}>2024년 05월 18일 (토)</p>
                        <p className={styles.grayText}>오후 01:00 ~ 오후 05:00</p>         
                        <br />                                              
                        <p className={styles.boldText}>주최</p>
                        <p className={styles.grayText}>구름톤 유니브</p>
                        <br />
                        <p className={styles.grayText} 
                        style={{ 
                            textAlign: 'right',
                            marginRight: '75px'
                        }}
                        >
                            무료
                        </p>
                    </div>
                </div>
            </div>

            {/* line */}
            <div className={styles.line}></div>;

            {/* buttons */}
            <div className={styles.buttonContainer}>
                <div style={{ marginRight: '10px' }}>
                    <a href = "">
                        <div className={styles.buttonText}>
                            #태그
                        </div>
                    </a>
                </div>
                <div className={styles.buttonWrap}>
                    <a href="https://goorm-square.oopy.io/" className={styles.button}>바로가기</a>
                </div>
            </div>

            {/* line */}
            <div className={styles.line}></div>;

            {/* container */}
            <div id={styles.container}>
                {`
                🤔 구름톤 유니브 After Party?
                구름톤 유니브 2기 수료식 행사로 2기를 매듭짓는 자리입니다.

                💬 구름톤 유니브 2기 서비스 부스 및 이벤트 부스
                💬 다양한 즐길거리

                💻 진행일자 및 장소
                구름 스퀘어, 5월 18일(토) 13시 ~ 18시 

                👫 대상
                ✅ 구름톤 유니브의 모든 미르미
                ✅ 구름톤 유니브 관심 있는 누구나

                🎉 행사 테마
                행사 전반의 분위기가 파티로 구성될 예정입니다 💃🏼

                📆 벚꽃톤 서비스 부스
                5월 18일 13시 ~ 18시

                💗 오후 한 시부터 여섯시까지 자유로운 서비스 부스를 운영
                💗 해당 행사로 서비스의 실사용자를 늘릴 수 있는 기회
                💗 현장 유저 피드백을 통한 서비스 디벨롭 인사이트

                🕰️ 타임라인
                ~13:00 : 입장
                13:00 ~ 13:30 : Intro(구름톤 유니브 2기 중간회고 공유)
                13:30 ~ 14:00 : ✨ EVENT TIME
                14:00 ~ 14:30 : 두근두근 세미나(추후 공개)
                14:30 ~ 15:00 : ✨ EVNET TIME
                15:00 ~ 15:30 : 두근두근 세미나(추후 공개)
                15:30 ~ 16:00 : ✨ EVENT TIME
                16:00 ~ 16:30 : 두근두근 세미나(추후 공개)
                16:30 ~ 17:00 : Outro(이후 구름톤 유니브 활동)
                17:00~ :🍻 Beer Networking!

                💬 EVNET TIME?
                🍻 스탠딩 맥주 파티
                📄 포트폴리오 / 이력서 / 자소서 현업자 피드백
                🧑🏼‍💻 알고리즘 코딩 대회
                🎰 현장 빙고 이벤트 외에 당일 현장 공개 이벤트가 추가로 있으니 많은 기대해주세요 :)
                세부 내용은 변경될 수 있음을 미리 고지드립니다.

                ☎️ 문의
                email : 9oormthonuniv.official@gmail.com
                instal : https://www.instagram.com/9oormthonuniv.official/
                `}
            </div>
            <Map />
        </div>
    );
}

export default ContainerCombine;