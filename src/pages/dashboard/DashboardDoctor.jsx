import React, { useState } from "react";
import { Col, Row, Form, Container, Pagination } from "react-bootstrap";
import Header from "../../components/header/Header";
import { NavLink } from "react-router-dom";
import './DashboardDoctor.css';
function DashboardDoctor() {
    const [formData, setFormData] = useState({
        madt: "",
        htdt: "",
        tungay: "",
        denngay: "",
    });

    const data = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        hospital: `Bệnh viện ${i + 1}`,
        prescriptionCode: `RX-${1000 + i}`,
        treatmentType: i % 2 === 0 ? "Ngoại trú" : "Nội trú",
        patientName: `Nguyễn Văn ${String.fromCharCode(65 + (i % 26))}`,
    }));

    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="d-flex flex-column">
            <Header title={"DANH SÁCH ĐƠN THUỐC"} />

            <Container className="container">
                <Form className="mt-4">
                    <Row className="">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Mã đơn thuốc</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="madt"
                                    value={formData.madt}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="htdt">
                                <Form.Label><strong>Hình thức điều trị</strong></Form.Label>
                                <Form.Select name="htdt"
                                    value={formData.htdt}
                                    onChange={handleChange}
                                    required>
                                    <option>Chọn hình thức điều trị</option>
                                    <option>Nội trú</option>
                                    <option>Ngoại trú</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className="">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Từ ngày</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="tungay"
                                    value={formData.tungay}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="htdt">
                                <Form.Label><strong>Đến ngày</strong></Form.Label>
                                <Form.Control
                                    type="date"
                                    name="denngay"
                                    value={formData.denngay}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Container className="container mt-4">
                <div className="d-flex justify-content-between">
                    <h5 className="flex-grow-1">Danh sách đơn thuốc: 20</h5>
                    <NavLink to={"/add-medicine"} className="btn btn-add">Thêm đơn thuốc</NavLink>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Cơ sở khám chữa bệnh</th>
                                <th>Mã đơn thuốc</th>
                                <th>Hình thức điều trị</th>
                                <th>Tên bệnh nhân</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.hospital}</td>
                                    <td>{row.prescriptionCode}</td>
                                    <td>{row.treatmentType}</td>
                                    <td>{row.patientName}</td>
                                    <td>
                                        <NavLink to={`/detail-medicine/${row.id}`} className="btn btn-primary btn-sm">Xem chi tiết </NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Pagination>
                        <Pagination.First
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />

                        {Array.from({ length: totalPages }, (_, i) => (
                            <Pagination.Item
                                key={i + 1}
                                active={i + 1 === currentPage}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}

                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                        <Pagination.Last
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>
                </div>
            </Container>
        </div>
    );
}

export default DashboardDoctor;