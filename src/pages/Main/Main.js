import { useNavigate } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';

import styles from './Main.module.css';

import { ReactComponent as FirstImg } from '../../assets/images/main/callog-white.svg';
import secondImg from '../../assets/images/main/EventPage.png';
import thirdImg from '../../assets/images/main/EventSearch.png';

import {FirstButtons} from './FirstButton';

function Main() {
    const navigate = useNavigate();

    return (
        <div className={styles.background}>
            <Carousel className="carousel-dark" interval={5000}>
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-sm ${styles.itemCaption}`}>
                            <div className={styles.captionWrap}>
                                <span className={styles.captionTitle}>
                                    IT 행사 참여 · 관리<br/>
                                    간편하고 빠르게
                                </span><br/>
                                <span className={styles.captionContent}>
                                    Aenean bibendum augue at semper facilisis.<br/>
                                    Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                                </span><br/>
                                <FirstButtons />
                            </div>
                        </div>
                        <div className={`col-sm ${styles.itemImg}`}>
                            <FirstImg />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-sm ${styles.itemCaption}`}>
                            <div className={styles.captionWrap}>
                                <span className={styles.captionTitle}>
                                    원하는 방식으로<br/>
                                    간편하게 전환
                                </span><br/>
                                <span className={styles.captionContent}>
                                    Aenean bibendum augue at semper facilisis.<br/>
                                    Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                                </span><br/>
                                <FirstButtons />
                            </div>
                        </div>
                        <div className={`col-sm ${styles.itemImg}`}>
                            <img
                                src={secondImg}
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`row ${styles.itemWrap}`}>
                        <div className={`col-sm ${styles.itemCaption}`}>
                            <div className={styles.captionWrap}>
                                <span className={styles.captionTitle}>
                                    검색도 분류도 빠르게
                                </span><br/>
                                <span className={styles.captionContent}>
                                    Aenean bibendum augue at semper facilisis.<br/>
                                    Quisque egestas dignissim diam, quis rhoncus arcu lectus.
                                </span><br/>
                                <FirstButtons />
                            </div>
                        </div>
                        <div className={`col-sm ${styles.itemImg}`}>
                            <img
                                src={thirdImg}
                                alt="Third slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Main;
