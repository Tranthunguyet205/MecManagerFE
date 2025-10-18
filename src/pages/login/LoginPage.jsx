import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./LoginPage.css";
import doctorImg from "../../assets/doctor.png"; // bạn thay ảnh của mình vào đây
import medicineImg from "../../assets/heart.png";   // ảnh lọ thuốc hoặc viên thuốc

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Tên đăng nhập: ${username}\nMật khẩu: ${password}`);
    };

    return (
        <div className="login-container">
            {/* Bên trái */}
            <div className="login-left">
                <div className="doctor-wrapper">
                    <Image src={doctorImg} alt="Doctor" className="doctor-image" />
                </div>
            </div>

            {/* Bên phải */}
            <div className="login-right">
                <div className="login-box">
                    <Image src={medicineImg} alt="Medicine" className="medicine-img" />

                    <h2 className="login-title">ĐĂNG NHẬP</h2>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label><strong>Tên Đăng Nhập:</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label><strong>Mật Khẩu:</strong></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                            />
                        </Form.Group>

                        <Row className="mb-3 align-items-center justify-content-between">
                            <Col xs="auto">
                                <Form.Check
                                    type="checkbox"
                                    label="Nhớ tài khoản"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                            </Col>
                            <Col xs="auto">
                                <a href="#" className="forgot-password">Quên Mật Khẩu?</a>
                            </Col>
                        </Row>

                        <div className="text-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="login-btn px-5 py-2 rounded-pill fw-bold"
                            >
                                ĐĂNG NHẬP
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
