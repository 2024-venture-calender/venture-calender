import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistDispatch } from './UserContext';
 

// const User = {
// email: 'test@example.com',
// pw: 'test2323@@@'
// }


export default function Regist() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);


    const dispatch = useRegistDispatch();
    // const nextId = useRegistNextId();

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            regist: {
                // id: nextId.current,
                email: email,
                pw: pw,
                name: name,
                phone: phone
            }
        });
        // nextId.current += 1;
    };

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

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    let navigate = useNavigate();

    const onClickConfirmButton = () => {
        console.log(email);
        alert('회원가입에 성공했습니다.');
        navigate("/login");
    }

    return (
        <div className="page">
            <div className="pageWrap container">
                <div className="titleWrap">
                    JOIN
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
                    <div>올바른 형식의 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">
                    비밀번호
                </div>
                <div className="inputWrap">
                    <input
                    className="input"
                    type="text"
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


                <div style={{ marginTop: "26px" }} className="inputTitle">
                    이름
                </div>
                <div className="inputWrap">
                    <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={handleName}
                    />
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">
                    전화번호
                </div>
                <div className="inputWrap">
                    <input
                    className="input"
                    type="text"
                    value={phone}
                    onChange={handlePhone}
                    />
                </div>

                </div>

                <div>
                <button onSubmit={onSubmit} onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    회원가입
                </button>
                </div>
            </div>
        </div>
    );
}