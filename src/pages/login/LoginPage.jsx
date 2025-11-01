import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Image, Nav } from "react-bootstrap";
import "./LoginPage.css";
import medibgImg from "../../assets/medibg.png";
import doctorloginImg from "../../assets/doclogin.png";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // alert(`Tên đăng nhập: ${username}\nMật khẩu: ${password}`);
        navigate("/dashboard", { replace: true });
    };
    return (
        <div className="login-container">
            {/* Bên trái */}
            <div className="login-left">
                <div className="doctor-wrapper">
                    <Image src={medibgImg} alt="Doctor" className="background-image" style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        maxHeight: "100vh",
                        display: "block",
                        margin: "0 auto",
                        transform: "translateY(0%)",
                        overflow: "hidden",
                        transformOrigin: "center top"
                    }} />
                    <Image src={doctorloginImg} alt="Medicine" className="doctor-img" />
                </div>
            </div>

            {/* Bên phải */}
            <div className="login-right">
                <div className="login-box">

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
