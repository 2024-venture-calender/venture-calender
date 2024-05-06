<p align="center">
  <img 
    width="500" 
    alt="스크린샷 2024-05-05 오후 10 16 50" 
    src="https://github.com/2024-venture-calender/venture-calender/assets/133643805/66b7d966-c317-4157-8ddd-73b4c8afa9b8"
  >
  <br>
  <br>
</p>

# 📆 캘로그 (Callog)

## ❓ 프로젝트 소개

Callog는 Calendar(캘린더)와 Log(로그)를 합쳐 만든 단어로, 캘린더에 이벤트를 기록할 수 있도록 한

개발자를 위한 일정 관리 도구입니다

<br/>

## ❕프로젝트 선정 이유

개발자들은 프로젝트를 다루면서 여러 가지 일정을 관리해야 하는 일이 많은데, 기존의 툴들은 기본적인 리스트 형식으로만 되어 있어 한눈에 알아보기 어려운 경우가 많습니다. 따라서 캘린더 형식의 일정 관리 툴을 만들어 개발 프로젝트의 일정을 시각화하고, 개발자들의 효율적인 일정 파악과 일정 간 관계를 이해하는 데 도움이 되고자 프로젝트를 진행하게 되었습니다.

<br/>

## 🚀 시작하는 법

### Visual Studio Code
- Github venture-calendar 메인화면에서 초록색 "<> Code" 버튼 눌러 "Download ZIP" 후 압축 하기
- Visual Studio Code 설치 후 실행
- 프로젝트 열기(좌측 상단 메뉴 클릭) : File/Open.../"압축 해제 한 폴더 선택"
- terminal 에서 npm install 명령 진행
- terminal 에서 npm start 로 프로그램 실행

<br/>

## 🔗 요구 사항 
Chrome, FireFox, Edge 등 모던브라우저를 실행할 수 있는 컴퓨터

<br/>

## 🕺🏻 팀원 구성
<div align="center">

| **도영익** | **박세연** | **심선우** | **안홍영** | **오송은** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://github.com/2024-venture-calender/venture-calender/assets/82174047/13ae07f4-c4c0-4aeb-9df0-ceec2b938e1d" height=150 width=150> <br/> @do0ik](https://github.com/do0ik) | [<img src="https://github.com/2024-venture-calender/venture-calender/assets/82174047/1ae60875-a96f-4189-b5ee-3955cfc9c45f" height=150 width=150> <br/> @se-3-yeon](https://github.com/se-3-yeon) | [<img src="https://github.com/2024-venture-calender/venture-calender/assets/82174047/f52f811d-bbe8-42ac-bfff-30e0b1aeedd2" height=150 width=150> <br/> @k168ww](https://github.com/k168ww) | [<img src="https://github.com/2024-venture-calender/venture-calender/assets/82174047/fe30e038-64e3-4f75-aac0-08cfa83e474b" height=150 width=150> <br/> @inredzero](https://github.com/inredzero) |[<img src="https://github.com/2024-venture-calender/venture-calender/assets/82174047/76a016d0-6009-4d7e-9cb5-2c687d3c29ce" height=150 width=150> <br/> @ddoddo1228](https://github.com/ddoddo1228) |
| 메인 페이지 구현 | 이벤트 목록 페이지 구현 | 이벤트 캘린더 페이지 구현 | 로그인, 회원가입 구현 | 상세 페이지 구현 |

</div>

<br/>

## 🖥️ 개발 환경
- html, css, javascript, react, node.js, figma

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white"><img src="https://img.shields.를 생성 가능

<br/>

## 🏰 프로젝트 구조 
```
📦public
 ┣ 📂data
 ┃ ┗ 📜data.json
 ┣ 📂images
 ┃ ┣ 📂EventDetails
 ┃ ┃ ┣ 📜baemin.png
 ┃ ┃ ┣ 📜groom.png
 ┃ ┃ ┗ 📜udeme.png
 ┃ ┗ 📜logo192.png
 ┣ 📜favicon.ico
 ┣ 📜icon.png
 ┣ 📜index.html
 ┗ 📜manifest.json
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┗ 📜callog3-white-col.svg
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜1.jpg
 ┃ ┃ ┃ ┣ 📜2.jpg
 ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┗ 📜callog-white.svg
 ┃ ┃ ┣ 📜goormthon.png
 ┃ ┃ ┣ 📜springboot.png
 ┃ ┃ ┗ 📜woohyung.jpg
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.css
 ┃ ┃ ┗ 📜Footer.js
 ┃ ┗ 📂Header
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┣ 📜Header2.js
 ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┗ 📜Navbar.module.css
 ┣ 📂layouts
 ┃ ┗ 📜Layout.js
 ┣ 📂pages
 ┃ ┣ 📂EventCalendar
 ┃ ┃ ┣ 📜EventCalendar.css
 ┃ ┃ ┗ 📜EventCalendar.js
 ┃ ┣ 📂EventList
 ┃ ┃ ┣ 📜EventList.css
 ┃ ┃ ┗ 📜EventList.js
 ┃ ┣ 📂Events
 ┃ ┃ ┣ 📂page1
 ┃ ┃ ┃ ┗ 📜ContainerCombine.js
 ┃ ┃ ┣ 📂page2
 ┃ ┃ ┃ ┗ 📜ContainerCombine2.js
 ┃ ┃ ┣ 📂page3
 ┃ ┃ ┃ ┗ 📜ContainerCombine3.js
 ┃ ┃ ┣ 📜EventDetails.js
 ┃ ┃ ┣ 📜EventDetails.module.css
 ┃ ┃ ┗ 📜Map.js
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜FirstButton.js
 ┃ ┃ ┣ 📜Main.js
 ┃ ┃ ┗ 📜Main.module.css
 ┃ ┗ 📂User
 ┃ ┃ ┣ 📜Login.css
 ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┣ 📜Register.js
 ┃ ┃ ┗ 📜UserContext.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📜Error.js
 ┣ 📜Router.js
 ┣ 📜ScrollTop.js
 ┣ 📜index.css
 ┗ 📜index.js
```

<br/>

