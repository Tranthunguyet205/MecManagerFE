import { Modal, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './PopupAlert.css';
function PopupAlert({ show, onClose, message, note, variant = "success", title = "Thông báo" }) {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: '#85F3E4' }}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                {message}
                <Alert variant={variant} className="mt-3 text-center" style={{ fontSize: '12px' }}>
                    {note}
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <NavLink to={"/login"}>
                    <Button variant="primary">
                        Trở về trang chính
                    </Button>
                </NavLink>
            </Modal.Footer>
        </Modal>
    );
}

export default PopupAlert;
