import React from 'react';
import PropTypes from 'prop-types';
import { Table, ButtonToolbar, Button, Image } from 'react-bootstrap';

export default class CustomTable extends React.Component {
    render() {
        return (
            <div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            {this.props.columnsNames.map(column => {
                                return (
                                    <th className="text-center">{column}</th>
                                )
                            })}

                            {this.props.hasActions && <th style={{ width: 160 }}className="text-center">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((row, index) => {
                            return (
                                <tr key={`row${index}`}>
                                    {this.props.columns.map((column, j) => {
                                        if (column.toLowerCase() === "image") {
                                            return (
                                                <td key={index} style={{ width: 100 }}>
                                                    <Image src={row[column]} rounded fluid />
                                                </td>
                                            )
                                        }
                                        return (
                                            <td key={`${index}column${j}`} className="text-center">{row[column]}</td>
                                        )
                                    })}
                                    {this.props.hasActions && <td>
                                        <ButtonToolbar>
                                            {this.props.canEdit &&
                                                <Button style={{ marginRight: 5 }} variant="warning" onClick={(e) => this.props.edit(row)}>
                                                    Edit
                                                </Button>
                                            }
                                            {this.props.canDelete &&
                                                <Button variant="danger" onClick={(e) => this.props.delete(row)}>
                                                    Delete
                                                </Button>
                                            }
                                        </ButtonToolbar>
                                    </td>}
                                </tr>
                            )
                        })}
                    </tbody>

                </Table>
            </div>
        )
    }
}

CustomTable.propTypes = {
    name: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    columnsNames: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    hasActions: PropTypes.bool,
}

CustomTable.defaultProps = {

    data: [],
    title: "",
    hasActions: false,
    isSelected: false,

}