import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Dropdown,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorImg from "../../assets/doctor.png"; // chỉnh lại nếu đường dẫn khác
import { useNavigate, NavLink } from "react-router-dom";


function DashboardAdmin() {
  const navigate = useNavigate();

  // Giả lập số đơn thuốc từ database
  const totalPrescriptions = 53;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      {/* ===== THANH MENU TRÊN CÙNG ===== */}
      <Container
        fluid
        className="py-2 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#8CF7E8" }}
      >
        {/* Ô TÌM KIẾM */}
        <InputGroup
          style={{
            width: "330px",
            borderRadius: "25px",
            overflow: "hidden",
            border: "2px solid #002D3A",
          }}
        >
          <FormControl
            placeholder="Tìm kiếm mã đơn thuốc"
            style={{
              backgroundColor: "#8CF7E8",
              border: "none",
              boxShadow: "none",
              fontSize: "15px",
              color: "#000",
            }}
          />
          <InputGroup.Text
            style={{
              backgroundColor: "#8CF7E8",
              border: "none",
            }}
          >
            <FaSearch color="#000" style={{ cursor: "pointer" }} />
          </InputGroup.Text>
        </InputGroup>

        {/* MENU CHÍNH */}
        <div
          className="d-flex align-items-center"
          style={{
            fontWeight: "600",
            color: "#0D1B56",
            fontSize: "16px",
            gap: "25px",
          }}
        >
          {/* Nút ĐƠN THUỐC */}
          <span
            style={{
              borderRight: "1px solid #0D1B56",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/dashboard")}
          >
            ĐƠN THUỐC
          </span>

          {/* Dropdown BÁC SĨ */}
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              style={{
                textDecoration: "none",
                color: "#0D1B56",
                border: "none",
                fontWeight: "600",
              }}
            >
              BÁC SĨ
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/listDoctor")}>
                Danh sách bác sĩ
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Dropdown PHÒNG KHÁM */}
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              style={{
                textDecoration: "none",
                color: "#0D1B56",
                border: "none",
                fontWeight: "600",
              }}
            >
              Phòng Khám A
            </Dropdown.Toggle>

            <Dropdown.Menu>
             
                <Dropdown.Item as={NavLink} to="/personal-doctor">Hồ sơ cá nhân</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/change-password">Đổi mật khẩu</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={NavLink} to="/login">Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>

      <div
        className="text-center"
        style={{
          paddingTop: "80px",
          position: "relative",
          zIndex: 1,
        }}
      >
 
        <h3
          style={{
            fontWeight: "bold",
            color: "#212E63",
            lineHeight: "1.5",
          }}
        >
          HỆ THỐNG QUẢN LÝ ĐƠN THUỐC <br /> ĐIỆN TỬ NỘI BỘ
        </h3>

        {/* Dòng chữ thống kê có nút */}
        <h4
          style={{
            fontWeight: "bold",
            color: "#212E63",
            marginTop: "30px",
          }}
        >
          CÓ{" "}
          <Button
            variant="link"
            onClick={() => navigate("/dashboard")}
            style={{
              color: "#43C7CC",
              fontWeight: "bold",
              fontSize: "22px",
              textDecoration: "none",
              padding: 0,
            }}
          >
            {totalPrescriptions}
          </Button>{" "}
          ĐƠN THUỐC ĐÃ ĐƯỢC KÊ
        </h4>

        {/* Hình bác sĩ */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            zIndex: 0,
          }}
        >
          <img
            src={doctorImg}
            alt="Doctor"
            style={{
              width: "400px",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
