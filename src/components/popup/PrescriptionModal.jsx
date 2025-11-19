// FILE: src/components/PrescriptionPopup.jsx
// 👉 Đây là file popup tách riêng, HomePage chỉ việc import và gọi.
// 👉 Popup dùng React-Bootstrap Modal + CSS animation custom.

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./popupSearch.css"; // 👉 CSS hiệu ứng + nền mờ

function PrescriptionPopup({ show, onClose, data={} }) {
    // 👉 Nếu chưa có dữ liệu thì không render nội dung popup
    if (!data) return null;

    return (
        <Modal
            show={show}
            onHide={onClose}
            size="lg"
            centered

            // 👉 Thêm class để tạo hiệu ứng chuyển động
            dialogClassName="popup-animate"

            // 👉 Thêm class để tạo nền mờ custom
            backdropClassName="popup-backdrop"
        >
            <Modal.Header closeButton>
                <Modal.Title style={{ fontWeight: "bold" }}>
                    Thông Tin Đơn Thuốc
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div><strong>Mã đơn thuốc:</strong> {data.maDon}</div>
                <div><strong>Kết luận:</strong> {data.ketLuan}</div>
                <div><strong>Ngày kê đơn:</strong> {data.ngayKeDon}</div>

                <table className="table table-bordered mt-3">
                    <thead className="table-light">
                        <tr>
                            <th>Mã thuốc</th>
                            <th>Tên thuốc</th>
                            <th>ĐVT</th>
                            <th>Số lượng</th>
                            <th>Cách dùng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.thuoc.map((t, i) => (
                            <tr key={i}>
                                <td>{t.ma}</td>
                                <td>{t.ten}</td>
                                <td>{t.dvt}</td>
                                <td>{t.soLuong}</td>
                                <td>{t.cachDung}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PrescriptionPopup;
