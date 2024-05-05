import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from './Navbar.module.css';
import { ReactComponent as LogoImg } from '../../assets/images/header/callog3-white-col.svg';

function Header2() {

  const navigate = useNavigate();

  return (
      <div className="py-2" style={{backgroundColor: '#481677'}}>
        <div className={`${styles.navBar} text-white d-flex`} >
            <div id={styles.logoImg}>
                <LogoImg onClick={() => navigate('/')}/>
            </div>
            <Button variant
                className={`${styles.navLink}`}
                onClick={() => navigate('/?isLoggedIn=false')}
                style={{marginLeft: 'auto', backgroundColor: '#28242c'}}>
                로그아웃
            </Button>
        </div>
      </div>
  );
}

export default Header2;
