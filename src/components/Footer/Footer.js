import './Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <div className="py-4 bgColor">
            <Container className="text-center text-white d-flex flex-column">
                <span>Copyright ⓒ Callog. All rights reserved.</span>
            </Container>
        </div>
    );
}

export default Footer;
