import React from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorImg from "../../assets/doctor.png";
import heartImg from "../../assets/heart.png";

function HomePage() {
    return (
        <div style={{ minHeight: "100vh" }} className="home">
            {/* Thanh tìm kiếm + nút đăng ký/đăng nhập */}
            <Container fluid className="py-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#C6FFF8" }}>
                <InputGroup style={{ width: "300px", borderRadius: "25px", overflow: "hidden", border: "1px solid black" }}>
                    <FormControl
                        placeholder="Tìm kiếm mã đơn thuốc"
                        style={{
                            backgroundColor: "#C85F3E4",
                            border: "none",
                            boxShadow: "none",
                            color: "#000",
                            fontSize: "16px",
                        }}
                    />
                    <InputGroup.Text style={{ backgroundColor: "#fff", border: "none" }}>
                        <FaSearch color="black" style={{ cursor: 'pointer' }} />
                    </InputGroup.Text>
                </InputGroup>

                <div className="d-flex gap-2">
                    <NavLink to="/register" className="btn btn-primary">Đăng Ký</NavLink>
                    <NavLink to="/login" className="btn btn-primary">Đăng Nhập</NavLink>
                </div>
            </Container>

            {/* Phần nội dung giữa */}
            <div
                className="text-center"
                style={{
                    backgroundColor: "white",
                    // height: "calc(110vh - 70px)",
                    paddingTop: "40px",
                    position: "relative",
                }}
            >
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "#212E63",
                    }}
                >
                    HỆ THỐNG QUẢN LÝ ĐƠN THUỐC <br /> ĐIỆN TỬ NỘI BỘ
                </h3>

                {/* Hình trái tim */}
                <img
                    src={heartImg} alt="Heart" className="heart"
                    style={{ width: "270px", marginTop: "30px" }}
                />

                {/* Ảnh bác sĩ + kim tiêm */}
                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "auto",
                        overflow: "hidden",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={doctorImg}
                        alt="Doctor"
                        style={{
                            width: "100vw",          // phủ khít chiều ngang
                            maxHeight: "100vh",
                            display: "block",
                            margin: "0 auto",
                            transform: "translateY(5%)", // đẩy ảnh xuống thấp hơn, tránh che logo
                            overflow: "hidden",
                        }}
                    />
                </div>

            </div>

        </div>
    );
}

export default HomePage;
