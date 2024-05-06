import styles from '../EventDetails.module.css';

import Map from '../Map'

function ContainerCombine3(){

    return(
        <div>
            {/* line */}
            <div id={styles.logo}></div>;

            {/* content */}
            <div className={styles.contentContainer}>
                <div id={styles.imageContainer}>
                <img id={styles.image} src="/images/EventDetails/baemin.png" alt="Image" />
                    <div id={styles.textContainer}>
                        <h2 id={styles.contentTitle}>우아한 형제들이 이야기하는, <br/>
                        추천/ML에서 '예측'을 서빙하는 것에 대하여</h2>
                        <br />
                        <p className={styles.boldText}>장소</p>
                        <p className={styles.grayText}>Zoom</p> 
                        <br />
                        <p className={styles.boldText}>일시</p>                            
                        <p className={styles.grayText}>2024년 01월 25일(목)</p>
                        <p className={styles.grayText}>오후 19:00 ~ 오후 21:00</p>         
                        <br />                                              
                        <p className={styles.boldText}>주최</p>
                        <p className={styles.grayText}>슈퍼코더</p>
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
                    <a href="https://www.supercoder.co/kr/" className={styles.button}>바로가기</a>
                </div>
            </div>

            {/* line */}
            <div className={styles.line}></div>;

            {/* container */}
            <div id={styles.container}>
                {`
                슈퍼코더는 전세계 개발자를 모집, 서류 평가, 1차 면접, 코딩테스트, 기술 면접 총 4단계를 통과한 상위 5%의 개발자를 국내 기업에 연결해주는 서비스를 제공하고 있습니다. 전세계 40,000명의 지원자 중 2,000명의 개발자가 이 검증 프로세스를 통과한 바 있으며, 국내 기업이 해외 개발자와 성공적으로 협업할 수 있도록 개발 프로세스와 프로젝트 매니지먼트 컨설팅을 무료로 제공하고 있습니다.


                슈코데이란? 
                슈퍼코더가 매달 IT 업계 최고 전문가분들을 모시고 최신 기술 동향과 인사이트를 공유하는 자리입니다. 슈퍼코더와 함께 성장하고자 하신다면 지금 바로 등록하세요!
                
                
                
                이번 슈코데이에서는 우아한 형제들의 '추천 서비스'에 대한 특강이 진행됩니다. 머신러닝 모델을 효과적으로 제공하기 위해 우아한 형제들의 추천시스템팀이 밝히는 '서빙'의 기술을 알아보고, 추천/ML 모델의 대고객 서비스 사례를 바탕으로 성공적인 전략과 시스템 설계에 대해 소개합니다.
                `}
            </div>
            
        </div>
    );
}

export default ContainerCombine3;
