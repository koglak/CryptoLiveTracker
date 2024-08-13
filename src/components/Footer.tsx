import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/footer.css';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="text-center">
                    <span className="mb-3 mb-md-0 text-muted">©2024 Crypto Live Tracker, Inc</span>
                </Row>

                <Row className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <a href="https://www.instagram.com/ruinsrover/"  ><FaInstagram className="m-1" style={{ fontSize: '2em', color: 'black' }} /></a>
                        <a href="https://github.com/koglak/"><FaGithub style={{ fontSize: '2em', color: 'black' }} className="m-1" /></a>
                        <a href="https://www.linkedin.com/in/kardelen-oglakci/" ><FaLinkedin style={{ fontSize: '2em', color: 'black' }} className="m-1" /></a>
                    </div>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;