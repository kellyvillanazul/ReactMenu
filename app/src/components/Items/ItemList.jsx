import React from 'react';
import { connect } from 'react-redux';
import { AllItems } from '../../reducers/itemReducer';
import CardItem from '../Card/Card'
import { Grid } from '@material-ui/core'


class ItemList extends React.Component {

    componentDidMount() {
        this.props.AllItems();
    }

    render() {

        return (
            <div style={{ marginTop: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            {this.props.items.map(item => (
                                <CardItem
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: Object.values(state.items)
});

export default connect(
    mapStateToProps,
    { AllItems }
)(ItemList)
