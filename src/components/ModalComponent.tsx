import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IModalProps } from '../interfaces/IModalProps';

function ModalComponent(props: IModalProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant={`outline-${props.buttonColorStyle ? props.buttonColorStyle : 'primary'}`}
                onClick={handleShow}
                className='me-2'
            >
                {props.buttonText ? props.buttonText : 'Button'}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop={props.static ? 'static' : true}
                keyboard={!props.static}
            >
                <Modal.Header closeButton={props.closeButton}>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {props.fields ? props.fields.map((field, idx) =>
                            <Form.Group className="mb-3" key={field.name + idx}>
                                <FloatingLabel label={field.name}>
                                    <Form.Control
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        autoFocus={idx === 0}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                        ) : props.message}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {(() => {
                        switch (props.button) {
                            case 'YesNo':
                                return <>
                                    <Button variant="primary" onClick={handleClose}>
                                        {props.confirmButtonAsButtonText ? props.buttonText : 'Yes'}
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        No
                                    </Button>
                                </>
                            case 'SaveCancel':
                                return <>
                                    <Button variant="primary" onClick={handleClose}>
                                        {props.confirmButtonAsButtonText ? props.buttonText : 'Save Changes'}
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </>
                            default:
                                return <Button variant="primary" onClick={handleClose}>
                                    {props.confirmButtonAsButtonText ? props.buttonText : 'Ok'}
                                </Button>
                        }
                    })()}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent