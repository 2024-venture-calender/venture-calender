import styles from '../EventDetails.module.css';

import Map from '../Map'

function ContainerCombine2(){

    return(
        <div>
            {/* line */}
            <div id={styles.logo}></div>;

            {/* content */}
            <div className={styles.contentContainer}>
                <div id={styles.imageContainer}>
                <img id={styles.image} src="/images/EventDetails/udeme.png" alt="Image" />
                    <div id={styles.textContainer}>
                        <h2 id={styles.contentTitle}>[유데미] 백엔드 개발자 취업 미니 부트캠프</h2>
                        <br />
                        <p className={styles.boldText}>장소</p>
                        <p className={styles.grayText}>온라인 zoom, slack 커뮤니티</p> 
                        <br />
                        <p className={styles.boldText}>일시</p>                            
                        <p className={styles.grayText}>2024년 05월 20일 (월) 오후 08:00</p>
                        <p className={styles.grayText}>~ 06월 21일 (금) 오후 10:00</p>         
                        <br />                                              
                        <p className={styles.boldText}>주최</p>
                        <p className={styles.grayText}>웅진 씽크빅 & 유데미</p>
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
                    <a href="https://onoffmix.com/event/298611" className={styles.button} target='_blank'>바로가기</a>
                </div>
            </div>

            {/* line */}
            <div className={styles.line}></div>;

            {/* container */}
            <div id={styles.container}>
                {`
                🎉백엔드 개발자 취업 미니 부트캠프 : 스프링부트(springboot) 입문 데브코스(5주 완성)
                Spring과 진짜 초면이면 들어오세요!
                
                매기수 정원 초과되는 스진초 8기 모집중😉
                
                
                
                V 혹시 스프링을 해보긴 했는데 뭔가 어설프게 알고 있는 느낌은 아닌가요?
                
                V 재밌고 쉽게, 정말 스스로 이해하면서 스프링 프로젝트 포트폴리오를 준비하고 싶으신가요?
                
                V 지금까지와는 다른 역대급 성장이 하고 싶은신가요?
                
                
                
                위 모든 고민을 한번에 해결할 수 있는 취업 미니 부트캠프 패키지입니다.
                
                전업 강사에게 1:1로 코칭 받으며, 5주간 같이 재밌게 공부해요!
                
                
                
                내 가치를 증명해줄 진짜 쓸 수 있는 포트폴리오와 1:1 코드리뷰, 학습 커뮤니티까지!
                
                어떤 강의보다 쉽고 재밌게 스프링과 자바를 함께 공부합니다.
                
                
                
                매일 조그만 미션을 부숴가며,
                
                성장하는 스스로를 눈으로 직접 확인하세요!
                
                
                
                ● 모집 신청 및 운영 기간
                
                신청 기간 : 2024.04.23~2024.05.17
                부트캠프 운영 기간 : 2024.05.20~2024.06.21 (5주)
                
                
                ● 교육 장소
                
                온라인 zoom, slack 커뮤니티
                
                
                ● 참가 대상
                
                ✔ 자바 백엔드 개발자로 취업 혹은 이직을 준비하고 있는 분
                ✔ 자바와 웹 개발을 진짜 겉핥기 식으로 학습하신 입문~초보 자바 개발자 분
                ✔ 스프링을 공부하긴 했는데 스프링이 마법같은 분들 (링가디움 레비오사)
                ✔ 개발자 코딩테스트, 면접을 대비하고 싶은 분
                ✔ 프로그래밍을 외우지 않고 제대로 이해하면서 하고 싶은 분들
                ✔ 내 가치를 증명해줄 진짜 쓸 수 있는 포트폴리오 프로젝트를 만들고 싶으신 분
                ✔ 실무에 바로 투입되었는데 따라가지 못하는 신입사원 및 주니어 백엔드 개발자 분들
                ✔ 웹 백엔드 개발자로 살아남기 위해 내가 공부해야하는 전반적인 가이드를 얻고 싶은 분들
                
                
                ● 패키지 혜택
                
                1. 유데미 인기 스프링부트 분야의 VOD 강의 무료 수강 쿠폰 (16만원 상당)
                2. 매주 1회 실시간 라이브 세션 + 주차별 세션 녹화본
                3. 학습 미션, 실습 과제, 참고 자료 제공
                4. 멘토님 및 동료들과 소통 가능한 Slack 커뮤니티 참여
                5. 코드 리뷰 (총 3회)
                6. 참여만 해도 자동으로 따라오는 포트폴리오
                
                
                
                ● 비용
                
                유료 / 390,000원
                
                
                ● 모집 인원
                
                최대 15명
                
                
                수 많은 후기가 증명하는 스프링 부트 입문 데브코스
                
                백엔드 개발자로 취뽀하고 싶다면 아래 링크로 신청하세요!
                
                
                
                ● 신청 링크
                
                https://onoffmix.com/event/298611
                
                
                `}
            </div>
            <Map />
        </div>
    );
}

export default ContainerCombine2;