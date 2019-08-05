import React from 'react';
import { Modal, ButtonToolbar, Button } from 'react-bootstrap';

export default class ModalConfirm extends React.Component {

    render() {
        return (
            <Modal show={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the Item: {this.props.item.name}
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar >
                        <Button bsStyle="info" pullRight fill type="button" onClick={this.props.delete(this.props.item.id)}></Button>
                        <Button bsStyle="default" pullRight fill onClick={this.props.hide}></Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        )
    }
}