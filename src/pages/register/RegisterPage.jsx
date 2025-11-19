import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Ear from "../../assets/ear.png";
import Medi from "../../assets/medi.png";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(1);
    const [repassword, setRepassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        // ✅ Optional: kiểm tra password trùng nhau trước khi gửi API
        if (password !== repassword) {
            alert("Mật khẩu nhập lại không khớp!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/apiMecManager/user/register",
                {
                    username: username,
                    fullName: "",   
                    gender: null,
                    passwordHash: password,
                    role: {
                        id: 1,
                        name: "DOCTOR",
                    },
                    createdUserId: 1,
                },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true, // ✅ gửi cookie nếu backend dùng session
                }
            );

            console.log("✅ Register success:", response.data);
            
            alert("Đăng ký thành công!");
            navigate("/login"); 
            //console.error("❌ Register failed:", error);
           

        } catch (error) {
            alert("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.");
            console.error("❌ Register failed:", error.response ? error.response.data : error);
           }
    };



    return (
        <div className="login-container">
            {/* Bên trái */}
            <div className="login-left">
                <div className="d-flex flex-column justify-content-between" style={{ height: '100%', maxHeight: '100vh' }}>
                    <div className="d-flex justify-content-end" style={{ height: '30%' }} >
                        <Image src={Ear} alt="Doctor" className="ear-image w-25" />
                    </div>
                    <div className="left-text login-title">HỆ THỐNG QUẢN LÝ ĐƠN THUỐC ĐIỆN TỬ NỘI BỘ </div>
                    <Image src={Medi} alt="Doctor" className="doctor-image" />
                </div>
            </div>

            {/* Bên phải */}
            <div className="login-right">
                <div className="login-box">
                    <h2 className="register-title">ĐĂNG KÝ TÀI KHOẢN BÁC SĨ</h2>

                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label><strong>Tên Đăng Nhập:</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                                required 
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
                                 required
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
                                 required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="login-btn px-5 py-2 rounded-pill fw-bold"
                            >
                                ĐĂNG KÝ
                            </Button>
                        </div> 
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;