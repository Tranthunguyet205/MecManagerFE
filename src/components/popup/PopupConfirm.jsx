import React from "react";
import { Modal, Button } from "react-bootstrap";
import './PopupConfirm.css';
function PopupConfirm({ show, onClose, onConfirm, title, message }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton style={{ backgroundColor: "#85F3E4" }}>
                <Modal.Title style={{ fontWeight: "bold" }}>
                    {title || "Xác nhận hành động"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ textAlign: "center", fontSize: "16px" }}>
                <p>{message || "Bạn có chắc chắn muốn thực hiện thao tác này?"}</p>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center gap-3">
                <Button className="btn-no"
                    variant="secondary"
                    onClick={onClose}
                    
                >
                    Không
                </Button>
                <Button className="btn-yes"
                    variant="danger"
                    onClick={onConfirm}
        
                >
                    Có
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PopupConfirm;
