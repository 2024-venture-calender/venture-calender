import { Carousel } from 'react-bootstrap';

import styles from './Main.module.css';

import { ReactComponent as FirstImg } from '../../assets/images/main/callog-white.svg';
import secondImg from '../../assets/images/main/2.jpg';
import thirdImg from '../../assets/images/main/3.png';

function Main() {
    return (
        <div className={styles.content}>
            <Carousel className="carousel-dark">
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-md ${styles.itemCaption}`}>
                            <span className={styles.captionTitle}>
                                IT 행사 참여 · 관리<br/>
                                간편하고 빠르게
                            </span>
                            <span className={styles.captionContent}>
                                Aenean bibendum augue at semper facilisis.<br/>
                                Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                            </span>
                        </div>
                        <div className={`col-md ${styles.itemImg}`}>
                            <FirstImg />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-md ${styles.itemCaption}`}>
                            <span className={styles.captionTitle}>
                                원하는 방식으로<br/>
                                간편하게 전환
                            </span>
                            <span className={styles.captionContent}>
                                Aenean bibendum augue at semper facilisis.<br/>
                                Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                            </span>
                        </div>
                        <div className={`col-md ${styles.itemImg}`}>
                            <img
                                src={secondImg}
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-md ${styles.itemCaption}`}>
                            <span className={styles.captionTitle}>
                                검색도 분류도 빠르게
                            </span>
                            <span className={styles.captionContent}>
                                Aenean bibendum augue at semper facilisis.<br/>
                                Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                            </span>
                        </div>
                        <div className={`col-md ${styles.itemImg}`}>
                            <img
                                src={thirdImg}
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Main;
