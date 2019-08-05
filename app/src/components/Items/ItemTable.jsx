import React from 'react';
import { Container, Row, Col, Modal, ButtonToolbar, Button } from 'react-bootstrap';
import CustomTable from '../CustomTable/CustomTable';
import { AllItems, DeleteItem, GetItem, UpdateItem } from '../../reducers/itemReducer';
import { connect } from 'react-redux';
import ItemForm from '../Items/ItemForm'

class ItemTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModalConfirm: false,
            showModalEdit: false,
            item: null
        }
    }

    componentDidMount() {
        this.props.AllItems();
        // this.props.GetItem(this.props.match.params.id);
    }

    closeModal = () => {
        this.setState({ showModalConfirm: false, showModalEdit: false, item: null })
    }

    updateItem = values => {
        this.props.UpdateItem(this.state.item.id, values)
    };

    deleteItem = () => {
        this.props.DeleteItem(this.state.item.id);
        this.closeModal();
    }

    render() {

        return (
            <div className="card">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <CustomTable
                                columns={["image", "name", "description", "price", "size"]}
                                columnsNames={["Image", "Name", "Description", "Price", "Size"]}
                                data={this.props.items}
                                hasActions={true}
                                canDelete={true}
                                canEdit={true}
                                edit={(item) => this.setState({ showModalEdit: true, item: item })}
                                delete={(item) => this.setState({ showModalConfirm: true, item: item })}
                            />
                        </Col>
                    </Row>
                </Container>

                {this.state.showModalConfirm &&
                    <Modal show={this.state.showModalConfirm} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete the Item: {this.state.item.name}
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonToolbar >
                                <Button variant="danger" onClick={this.closeModal}>Cancel</Button>
                                <Button variant="primary" onClick={this.deleteItem}>Delete</Button>
                            </ButtonToolbar>
                        </Modal.Footer>
                    </Modal>
                }

                {this.state.showModalEdit &&
                    <Modal show={this.state.showModalEdit} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ItemForm 
                                item={this.state.item}
                                done={this.closeModal}
                                onSubmit={this.updateItem}
                                />
                        </Modal.Body>
                    </Modal>
                }
            </div>

        )
    }
}

const mapStateToProps = state => ({
    items: Object.values(state.items),
});

export default connect(
    mapStateToProps,
    { AllItems, DeleteItem, UpdateItem }
)(ItemTable)