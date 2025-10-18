import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./Register.css";
import { toast } from "react-toastify";
import Ear from "../../assets/ear.png";
import Medi from "../../assets/medi.png";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // toast.success("Đăng ký thành công!");
        window.location.href = "/info-doctor";
    };

    return (
        <div className="login-container">
            {/* Bên trái */}
            <div className="login-left">
                <div className="d-flex flex-column justify-content-between" style={{ height: '100%', maxHeight: '100vh' }}>
                    <div className="d-flex justify-content-end" style={{ height: '30%' }} >
                        <Image src={Ear} alt="Doctor" className="ear-image w-50" />
                    </div>
                    <div className="left-text login-title">HỆ THỐNG QUẢN LÝ ĐƠN THUỐC ĐIỆN TỬ NỘI BỘ </div>
                    <Image src={Medi} alt="Doctor" className="doctor-image" />
                </div>
            </div>

            {/* Bên phải */}
            <div className="login-right">
                <div className="login-box">
                    <h2 className="register-title">ĐĂNG KÝ TÀI KHOẢN BÁC SĨ</h2>

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

                        <Form.Group className="mb-3" controlId="repassword">
                            <Form.Label><strong>Nhập lại mật Khẩu:</strong></Form.Label>
                            <Form.Control
                                type="repassword"
                                placeholder="Nhập lại mật khẩu"
                                value={repassword}
                                onChange={(e) => setRepassword(e.target.value)}
                                className="input-field"
                            />
                        </Form.Group>

                        {/* <div className="text-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="login-btn px-5 py-2 rounded-pill fw-bold"
                            >
                                ĐĂNG KÝ
                            </Button>
                        </div> */}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;