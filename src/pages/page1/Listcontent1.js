function Listcontent () {
  return (
      <div className="content-container">
          <div id="image-container">
          <img id="image" src="groom.png" alt="Image" />
              <div id="text-container">
                  <h2>9UAP : 구름톤유니브 에프터 파티</h2>
                  <br />
                  <p className="bold-text">장소</p>
                  <p className="gray-text">구름스퀘어 판교</p> 
                  <br />
                  <p className="bold-text">일시</p>                            
                  <p className="gray-text">2024년 05월 18일 (토)</p>
                  <p className="gray-text">오후 01:00 ~ 오후 05:00</p>         
                  <br />                                              
                  <p className="bold-text">주최</p>
                  <p className="gray-text">구름톤 유니브</p>
                  <br />
                  <p className="gray-text" 
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
  );
}

export default Listcontent;