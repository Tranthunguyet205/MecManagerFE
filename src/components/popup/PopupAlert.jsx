import { Modal, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function PopupAlert({ show, onClose, message, note, variant = "success", title = "Thông báo" }) {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: '#85F3E4' }}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                {message}
                <Alert variant="danger" className="mt-3 text-center" style={{ fontSize: '12px' }}>
                    {note}
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <NavLink to={"/"}>
                    <Button variant="primary">
                        Trở về đăng nhập
                    </Button>
                </NavLink>
            </Modal.Footer>
        </Modal>
    );
}

export default PopupAlert;
