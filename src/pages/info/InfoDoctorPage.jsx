import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function InfoDoctorPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        phone: "",
        cccd: "",
        issueDate: "",
        issuePlace: "",
        province: "",
        district: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Thông tin bác sĩ:", formData);
    };

    return (
        <Container className="pt-3 rounded container-fluid" style={{ backgroundColor: "#fff" }}>
            <h4 className="text-center mb-4" style={{ backgroundColor: "#8ee3f5", padding: "10px", borderRadius: "8px" }}>
                KHAI BÁO THÔNG TIN BÁC SĨ
            </h4>

            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Ngày sinh <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Số điện thoại <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Số CCCD <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="cccd"
                                value={formData.cccd}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Ngày cấp <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="date"
                                name="issueDate"
                                value={formData.issueDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Nơi cấp <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="issuePlace"
                                value={formData.issuePlace}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Nơi ở hiện nay <span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Tỉnh/Thành phố</option>
                                <option value="HN">Hà Nội</option>
                                <option value="HCM">TP. Hồ Chí Minh</option>
                                <option value="DN">Đà Nẵng</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Phường/Xã</Form.Label>
                            <Form.Select
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                            >
                                <option value="">Phường/Xã</option>
                                <option value="p1">Phường 1</option>
                                <option value="p2">Phường 2</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Địa chỉ cụ thể</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="text-center mt-4">
                    <Button variant="primary" type="submit">
                        Gửi thông tin
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default InfoDoctorPage;
