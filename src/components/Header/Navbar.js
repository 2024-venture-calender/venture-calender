import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import { Button } from 'react-bootstrap';
import { ReactComponent as LogoImg } from '../../assets/images/header/callog3-white-col.svg';

function Navbar() {
    return (
        <div className={`${styles.navBar} text-white d-flex`} >
            <Link to="/" id={styles.logoLink}>
                <LogoImg />
            </Link>
            <Button variant="outline-light" style={{marginLeft: 'auto', backgroundColor: '#28242c'}}>
                <Link to="/login" className={`${styles.navLink}`}>
                    로그인
                </Link>
            </Button>
            &nbsp;
            <Button variant="outline-light" style={{backgroundColor: '#28242c'}}>
                <Link to="/signup" className={`${styles.navLink}`}>
                    회원가입
                </Link>
            </Button>
        </div>
    );
}

export default Navbar;
