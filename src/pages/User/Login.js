import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const User = [
    {
        id: 1,
        email: 'qwer1234@naver.com',
        pw: 'qwer1234@@'
    },
    {
        id: 2,
        email: 'park@naver.com',
        pw: 'park1234@@'
    },
    {
        id: 3,
        email: 'kim@naver.com',
        pw: 'kim1234@@'
    },
    {
        id: 4,
        email: 'hong@naver.com',
        pw: 'hong1234@@'
    }
]


export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
    if(emailValid && pwValid) {
        setNotAllow(false);
        return;
    }
    setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
    };
    const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
        setPwValid(true);
    } else {
        setPwValid(false);
    }
    };

    const pass = User.findIndex(obj => obj.email == email && obj.pw == pw);
    // const pwPass = User.findIndex(obj => obj.pw === pw);

    // console.log(pass);

    let navigate = useNavigate();

    const onClickConfirmButton = () => {

        if(pass >= 0) {
            alert('로그인에 성공했습니다.');
            navigate("/?isLoggedIn=true");
        } else {
            alert("등록되지 않은 회원입니다.");
        }
    }

    return (
        <div className="page">
            <div className="pageWrap container">
                <div className="titleWrap">
                    LOGIN
                </div>

                <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div
                    className="inputWrap"
                >
                    <input
                    className="input"
                    type="text"
                    placeholder="test@gmail.com"
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">
                    비밀번호
                </div>
                <div className="inputWrap">
                    <input
                    className="input"
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    value={pw}
                    onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
                </div>

                <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    로그인
                </button>
                </div>
            </div>
        </div>
    );
}