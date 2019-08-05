import ItemService from '../services/api'
import { reset } from 'redux-form'
import history from '../history'

// Tipos de actions
const ALL_ITEMS = 'ALL_ITEMS';
const GET_ITEM = 'GET_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// Actions
const allItems = (items) => ({ type: ALL_ITEMS, payload: items });
const getItem = (id) => ({ type: GET_ITEM, payload: id });
const addItem = (item) => ({ type: ADD_ITEM, payload: item });
const updateItem = (item) => ({ type: UPDATE_ITEM, payload: item });
const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });

export const AllItems = () => {
    return (dispatch) => {
        ItemService.getAll().then(response => {
            dispatch(allItems(response.data.results));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const GetItem = (id) => {
    return (dispatch) => {
        ItemService.getById(id).then(response => {
            dispatch(getItem(response.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const AddItem = (item) => {
    return (dispatch) => {
        ItemService.create(item).then(response => {
            dispatch(addItem(response.data));
            dispatch(reset('itemForm'))
        })
    }
}

export const UpdateItem = (id, item) => {
    return (dispatch) => {
        ItemService.update(id, item).then(response => {
            dispatch(updateItem(response.data));
        }).catch(err => {
            console.log(err)
        })
    }
}

export const DeleteItem = (id) => {
    return (dispatch) => {
        ItemService.delete(id).then(response => {
            dispatch(deleteItem(id));
        }).catch(err => {
            console.log(err)
        })
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case ALL_ITEMS:
            return {
                ...state,
                ...action.payload
            };
        case GET_ITEM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case ADD_ITEM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_ITEM:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_ITEM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
}