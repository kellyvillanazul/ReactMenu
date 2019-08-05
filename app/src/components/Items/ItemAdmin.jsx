import React from 'react';
import { Button, ButtonToolbar, Container, Row, Col, Modal } from 'react-bootstrap'
import ItemTable from './ItemTable'
import ItemForm from './ItemForm'
import { AddItem } from '../../reducers/itemReducer';
import { connect } from 'react-redux';

class ItemAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    onSubmit = values => {
        this.props.AddItem(values);
    };

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <Button variant="primary" fill block onClick={() => this.setState({ showModal: true })}>
                        Add Item
                    </Button>
                </div>
                <ItemTable/>

                {this.state.showModal &&
                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ItemForm 
                                done={this.closeModal}
                                onSubmit={this.onSubmit}
                                />
                        </Modal.Body>
                    </Modal>
                }
            </div>

        )
    }
}


export default connect(
    null,
    { AddItem }
)(ItemAdmin)