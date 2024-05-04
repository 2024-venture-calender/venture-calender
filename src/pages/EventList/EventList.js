import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';

import goormthon from '../../assets/images/goormthon.png'
import woohyung from '../../assets/images/woohyung.jpg';
import springboot from '../../assets/images/springboot.png'

function EventList() {
    const [searchTerm, setSearchTerm] = useState('');

    const lists = [
        {
            eventCode: 1,
            image: goormthon,
            category: "EVENT",
            title: "9UAP : 구름톤유니브 애프터 파티",
            date: "기간: 2024.05.18(토) 오후 1:00~ 05:00",
            location: "장소: 구름 스퀘어 판교 "
        },
        {
            eventCode: 2,
            image: springboot,
            category: "EVENT",
            title: "[유데미]백엔드 개발자 취업 미니 부트캠프: 스프링부트(springboot)",
            date: "기간: 2024.05.20(월) 오후 08:00 ~ 06.21(금) 오후 10:00",
            location: "장소: 온라인 zoom, slack 커뮤니티"
        },
        {
            eventCode: 3,
            image: woohyung,
            category: "EVENT",
            title: "[슈코데이세미나] 우아한 형제들",
            date: "기간: 2024.01.25 (목) 19:00~21:00",
            location: "장소: 온라인"
        },
    ];

    const filteredLists = lists.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
        <div className='body'>
            <div className='contents'>
                <div className='search'>
                    {/* <div className='search-box'> */}
                        <input className='search-text' type='text' value={searchTerm} onChange={handleSearch} placeholder='검색어를 입력하세요.' />
                        {/* <button className='search-btn'>검색</button> */}
                        <input className='search-btn' type="submit" value={"검색"} />
                    {/* </div> */}

                </div>
                

                <div className="event-list">
                    {filteredLists.map((item, index) => (
                        /**/
                        <Link to={`/detail/${item.eventCode}`} key={index}>
                            <div className="event-item">
                                <div className='event-image-div'>
                                    <img className='event-image' src={item.image} alt={`이벤트 ${index + 1}`} />
                                </div>
                                <div className="event-details">
                                    <p className='event-category'>{item.category}</p>
                                    <p className='event-title'>{item.title}</p>
                                    <p className='event-date'>{item.date}</p>
                                    <p className='event-location'>{item.location}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default EventList;
