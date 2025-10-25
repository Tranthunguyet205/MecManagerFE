import { Row, Col } from 'react-bootstrap';
import './Header.css';
function Header({ title }) {
    const user = { name: 'Nguyen Van A' }
    return (
        <div className="header-comp">
            <Row className="align-items-center">
                <Col md={{ span: 5, offset: 4 }}>
                    <div className="text-center fw-bold" style={{ fontSize: '24px' }}>{title}</div>
                </Col>
                <Col md={3}>
                    <div className="text-end">{user.name}</div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;