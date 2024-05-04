import './Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <div className="py-4 bgColor1">
            <Container className="text-center text-white d-flex flex-column">
                <span>Copyright 머시기</span>
            </Container>
        </div>
    );
}

export default Footer;
