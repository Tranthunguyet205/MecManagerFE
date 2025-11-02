import { Row, Col, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ title }) {
    const user = { name: 'Nguyen Van A' };

    return (
        <div className="header-comp">
            <Row className="align-items-center">
                <Col md={{ span: 5, offset: 4 }}>
                    <div className="text-center fw-bold" style={{ fontSize: '24px' }}>{title}</div>
                </Col>
                <Col md={3} className="text-end">
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="" id="dropdown-user" className="fw-bold">
                            {user.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/personal-doctor">Hồ sơ cá nhân</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/change-password">Đổi mật khẩu</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={NavLink} to="/login">Đăng xuất</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
