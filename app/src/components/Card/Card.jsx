import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap'

export default class CardItem extends React.Component {
    render() {
        return (
            <Card style={{ width: '11rem', margin: 10, textAlign: "center" }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>$ {this.props.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Details</Button>
                </Card.Footer>
            </Card>
        );
    }
}