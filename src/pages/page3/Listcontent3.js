function Listcontent () {
  return (
      <div className="content-container">
          <div id="image-container">
          <img id="image" src="baemin.png" alt="Image" />
              <div id="text-container">
                  <h2>우아한 형제들이 이야기하는, </h2>
                  <h2>추천/ML에서 '예측'을 서빙하는 것에 대하여</h2>
                  <br />
                  <p className="bold-text">장소</p>
                  <p className="gray-text">Zoom</p> 
                  <br />
                  <p className="bold-text">일시</p>                            
                  <p className="gray-text">2024년 01월 25일(목)</p>
                  <p className="gray-text">오후 19:00 ~ 오후 21:00</p>         
                  <br />                                              
                  <p className="bold-text">주최</p>
                  <p className="gray-text">슈퍼코더</p>
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