function Listcontent () {
    return (
        <div className="content-container">
            <div id="image-container">
            <img id="image" src="udeme.png" alt="Image" />
                <div id="text-container">
                    <h2>[유데미] 백엔드 개발자 취업 미니 부트캠프</h2>
                    <br />
                    <p className="bold-text">장소</p>
                    <p className="gray-text">온라인 zoom, slack 커뮤니티</p> 
                    <br />
                    <p className="bold-text">일시</p>                            
                    <p className="gray-text">22024년 05월 20일 (월) 오후 08:00</p>
                    <p className="gray-text">~ 06월 21일 (금) 오후 10:00</p>         
                    <br />                                              
                    <p className="bold-text">주최</p>
                    <p className="gray-text">웅진 씽크빅 & 유데미</p>
                    <br />
                    <p className="gray-text" 
                    style={{ 
                        textAlign: 'right',
                        marginRight: '75px'
                    }}
                    >
                        유료
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Listcontent;