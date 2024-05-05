import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from './Main.module.css';

export function FirstButtons() {

  const navigate = useNavigate();

  return (

    <div>
        <Button
            className={styles.firstButton}
            variant="outline-dark"
            style={{backgroundColor: 'white', color: 'black'}}
            onClick={() => navigate('/signup')}
        >
            시작하기
        </Button>
        &nbsp;
        <Button
            className={styles.firstButton}
            variant="outline-dark"
            style={{backgroundColor: '#28242c', color: 'white'}}
            onClick={() => navigate('/calendar')}
        >
            이벤트 둘러보기
        </Button>
    </div>
  )
}