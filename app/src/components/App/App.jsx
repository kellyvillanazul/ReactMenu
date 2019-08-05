import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../Menu/Menu'
import ItemList from '../../components/Items/ItemList'
import ItemAdmin from '../../components/Items/ItemAdmin'
import { Provider } from 'react-redux';
import store from '../../store'

export default class AppContainer extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />
                </div>
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={ItemList} />
                        <Route exact path="/items" component={ItemAdmin} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        )
    }
}