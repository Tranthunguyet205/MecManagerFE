import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
function AddMedicine() {
   
    return (
        <div className="d-flex flex-column">
            <Header title={"THÊM ĐƠN THUỐC MỚI"} />
            <Container className="container mb-3">
                <Row className="mt-3">
                    <Form.Label>Mã đơn thuốc:</Form.Label>
                    <Form.Control
                        type="text"
                        name="madt"
                        value="38526NV209NB-c"
                        disabled
                        style={{ width: "auto", display: "inline-block", marginLeft: "10px" }}
                    />
                </Row>
                <Row className="mt-2">
                    <Form.Label>Cơ Sở Y Tế: Phòng Khám abc</Form.Label>
                </Row>
                <Row className="mt-2">
                    <Form.Label>Địa chỉ: 253 Trường Chinh, Ngã Tư Sở, Hà Nội</Form.Label>
                </Row>

                <Form className="mt-4">
                    <div className="text-center fw-bold">ĐƠN THUỐC</div>
                    <Row className="mt-3">
                        <Col md={4}>
                            <Form.Label>Tên bệnh nhân:</Form.Label>
                            <Form.Control
                                type="text"
                                name="tenbn"
                                value="Nguyễn Văn A"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Năm sinh</Form.Label>
                            <Form.Control
                                type="date"
                                name="namsinh"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Select name="gioitinh">
                                <option>Nam</option>
                                <option>Nữ</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={4}>
                            <Form.Label>Hình thức điều trị</Form.Label>
                            <Form.Select name="htdt">
                                <option>Nội trú</option>
                                <option>Ngoại trú</option>
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Label>Chiều cao</Form.Label>
                            <Form.Control
                                type="number"
                                name="cao"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Label>Cân nặng</Form.Label>
                            <Form.Control
                                type="number"
                                name="nang"
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <Form.Label>Nơi thường trú</Form.Label>
                            <Form.Control
                                type="text"
                                name="place"
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <Form.Label>Chẩn đoán</Form.Label>
                            <Form.Control
                                type="text"
                                name="cd"
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label>Kết luận</Form.Label>
                            <Form.Control
                                type="text"
                                name="kl"
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={9}>
                            <div className="table-reponsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Tên thuốc</th>
                                            <th>Đơn vị</th>
                                            <th>Số lượng</th>
                                            <th>Cách dùng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Paracetamol</td>
                                            <td>Viên</td>
                                            <td>10</td>
                                            <td>Uống sau ăn 2 lần/ngày</td>
                                        </tr>
                                        <tr>
                                            <td>Amoxicillin</td>
                                            <td>Viên</td>
                                            <td>20</td>
                                            <td>Uống trước ăn 3 lần/ngày</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col md={3}>
                            <Form.Label>Lời dặn</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="loidan"
                                value={formData.loidan}
                                rows={3}
                                
                            />


                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={{ span: 4, offset: 8 }} className="text-end">
                            <span>....., ngày .... tháng .... năm ....</span><br/>
                            <span>Bác sĩ khám bệnh </span><br />
                            <span>(Ký/ ghi rõ họ tên)</span> <br /><br />
                            <p>Hoàng Minh Ngọc</p>
                        </Col>
                    </Row>
                </Form>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="left_btn">
                        <Button className="btn-dark">Xóa đơn thuốc</Button>
                        <Button className="btn-dark ms-2">Thêm đơn thuốc</Button>
                    </div>
                    <div className="right_btn"><Button className="btn-dark">In đơn thuốc</Button></div>
                </div>
            </Container>
        </div>
    );
}

export default AddMedicine;