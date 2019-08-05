import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import items from './itemReducer'

export default combineReducers({
    form: formReducer,
    items
})