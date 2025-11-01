import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Badge, Alert } from "react-bootstrap";
import PopupAlert from "../../components/popup/PopupAlert";

function DoctorForm({ mode = "create" }) {
    //const user = { name: 'Nguyễn Văn A' };
    const [showAlert, setShowAlert] = useState(false);

    const emptyForm = {
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
        cchn: "",
        issueDateCchn: "",
        issuePlaceCchn: "",
        gphn: "",
        pvhd: "",
    };

    const demoForm = {
        fullName: "Nguyễn Văn A",
        dob: "1980-01-01",
        phone: "0123456789",
        cccd: "123456789",
        issueDate: "2010-01-01",
        issuePlace: "Hà Nội",
        province: "HN",
        district: "p1",
        address: "123 Đường ABC, Quận XYZ",
        email: "nguyen@gmail.com",
        cchn: "987654321",
        issueDateCchn: "2015-01-01",
        issuePlaceCchn: "TP. Hồ Chí Minh",
        gphn: "456789123",
        issueDateGphn: "2018-01-01",
        issuePlaceGphn: "Đà Nẵng",
        pvhd: "Khám và điều trị các bệnh về tim mạch, huyết áp.",
    };

    const [formData, setFormData] = useState(mode === "create" ? emptyForm : demoForm);

    useEffect(() => {
        if (mode === "create") {
            setFormData(emptyForm);
        } else {
            setFormData(demoForm);
        }
    }, [mode]);

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

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Số CCHN <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="cchn"
                                value={formData.cchn}
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
                                name="issueDateCchn"
                                value={formData.issueDateCchn}
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
                                name="issuePlaceCchn"
                                value={formData.issuePlaceCchn}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Số GPHN <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="gphn"
                                value={formData.gphn}
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
                                name="issueDateGphn"
                                value={formData.issueDateGphn}
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
                                value={formData.issuePlaceGphn}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Văn bằng chuyên môn</Form.Label>
                            <Form.Select
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                            >
                                <option value="">Chọn văn bằng</option>
                                <option value="bs">Bác sĩ</option>
                                <option value="ly">Lương y</option>
                                <option value="ys">Y sĩ</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={8}>
                        <Form.Group>
                            <Form.Label>Phạm vi hoạt động chuyên môn <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                name="pvhd"
                                value={formData.pvhd}
                                onChange={handleChange}
                                style={{ resize: "none", overflow: "hidden" }}
                                rows={1}
                                required
                                onInput={(e) => {
                                    e.target.style.height = "auto";
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }}
                            />
                            <Alert variant="danger" className="mt-2 p-2" style={{ fontSize: '13px' }}>Nhập đúng thông tin trên chứng chỉ hành nghề</Alert>
                        </Form.Group>
                    </Col>

                </Row>

                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>Tài liệu chứng chỉ hành nghề<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="file"
                                name="document"
                                value={formData.document}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>Giấy phép chứng chỉ hành nghề<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="file"
                                name="document_x"
                                value={formData.document_x}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>Cơ sở làm việc<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="document_x"
                                value={formData.document_x}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={12}>
                        <Alert variant="secondary" className="p-2 text-center">
                            TRẠNG THÁI NỘP HỒ SƠ - DUYỆT BỞI CƠ SỞ KHÁM CHỮA BỆNH
                        </Alert>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={12} className="text-center">
                        <Button variant="" type="submit" className="btn-outline-primary px-4 py-2 rounded-pill fw-bold">
                            Lưu bản nháp
                        </Button>
                        <Button variant="secondary" type="reset" className="px-4 py-2 rounded-pill fw-bold ms-3"
                            onClick={() => { setShowAlert(true) }}>
                            Gửi hồ sơ
                        </Button>
                    </Col>
                </Row>
            </Form>

            <PopupAlert
                show={showAlert}
                onClose={() => setShowAlert(false)}
                onHide={() => setShowAlert(false)}
                title="Đã gửi hồ sơ thành công"
                message="Hồ sơ của bạn đã được gửi đi thành công! 
                Hãy đăng nhập lại sau vài ngày và kiểm tra hệ thống xét duyệt bởi cơ sở khám chữa bệnh "
                note="Lưu ý: Trong thời gian chờ xét duyệt, bạn có thể thay đổi thông tin (Bao gồm cả CCHN)"
            />
        </Container>
    );
}

export default DoctorForm;
