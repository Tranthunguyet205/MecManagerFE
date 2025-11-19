import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import doctorImg from "../../assets/doctor.png";
import heartImg from "../../assets/heart.png";
import PrescriptionModal from "../../components/popup/PrescriptionModal.jsx";
import { toast } from "react-toastify";


function HomePage() {
    const [searchCode, setSearchCode] = useState("");
    const [prescription, setPrescription] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const fakePrescription = {
        maDon: "38526U94EUQ1-a",
        ketLuan: "Viêm họng cấp",
        ngayKeDon: "25/9/2025",
        thuoc: [
            { ma: "12290", ten: "Clanoz", soLuong: 10, dvt: "viên", cachDung: "1 viên sáng - tối" },
            { ma: "12275", ten: "Praverix 500mg", soLuong: 20, dvt: "viên", cachDung: "2 viên sáng - tối" },
        ]
    };
   
    const searchHander =()=>{
        if (searchCode.trim() == "38526U94EUQ1-a") {setShowPopup(true)}
        else{
            toast.warning("Không tôn tại ma thuốc này")
            // alert("chưa nhập thông tin")
        }
    }
    // 👉 ĐÃ SỬA — hàm tìm kiếm tích hợp API thật
    /* const handleSearch = async () => {
        if (!searchCode.trim()) return;

        try {
            // 🔥 API thật
            // 👉 THAY URL BẰNG API THẬT CỦA BẠN
            const res = await fetch(
                `https://API-CUA-BAN/prescription/${searchCode}`
            );

            if (res.ok) {
                const data = await res.json();

                // 👉 ĐÃ THÊM — lưu dữ liệu từ API
                setPrescription(data);

                // 👉 ĐÃ THÊM — mở popup
                setShowPopup(true);
                return;
            }

        } catch (e) {
            console.log("⚠ Không kết nối được API → dùng fake data để demo");
        }

        // 👉 Fallback khi API không chạy
        if (searchCode === "38526U94EUQ1-a") {
            setPrescription(fakePrescription);
            setShowPopup(true);
        } else {
            alert("Không tìm thấy đơn thuốc!");
        }
    }; */
    return (
        <>
        <div style={{ minHeight: "100vh" }} className="home">

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
                        value={searchCode}
                        onChange={(e)=>{setSearchCode(e.target.value)}}
                    />
                    <InputGroup.Text style={{ backgroundColor: "#fff", border: "none" }} onClick={searchHander}>
                        <FaSearch color="black" style={{ cursor: 'pointer' }} />
                    </InputGroup.Text>
                </InputGroup>

                <div className="d-flex gap-2">
                    <NavLink to="/register" className="btn btn-primary">Đăng Ký</NavLink>
                    <NavLink to="/login" className="btn btn-primary">Đăng Nhập</NavLink>
                </div>
            </Container>


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


                <img
                    src={heartImg} alt="Heart" className="heart"
                    style={{ width: "270px", marginTop: "30px" }}
                />


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
                            width: "100vw",
                            maxHeight: "100vh",
                            display: "block",
                            margin: "0 auto",
                            transform: "translateY(5%)",
                            overflow: "hidden",
                        }}
                    />
                </div>

            </div>

        </div>
    
        <PrescriptionModal
                show={showPopup}         // hiện/ẩn popup
                onClose={() => setShowPopup(false)} // đóng popup
                data={fakePrescription}      // truyền dữ liệu đơn thuốc
            />
        </>
    );
    
}

export default HomePage;
