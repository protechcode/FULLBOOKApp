import axios from 'axios';
import {GET_ITEM, GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types';
import { returnErrors } from './errorActions';


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:4000/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const getItem = (id) => dispatch => {
    dispatch(setItemsLoading());
    const url = 'http://localhost:4000/api/items/'+id
    axios.get(url)
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addItem = (item) => (dispatch) => {
    axios.post('http://localhost:4000/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = (id) => (dispatch) => {
    axios.delete(`http://localhost:4000/api/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateItem = (id, item) => (dispatch) => {
    axios.put(`http://localhost:4000/api/items/${id}`, item)
        .then(res => dispatch({
            type: UPDATE_ITEM,
            payload: Promise.all([id, res.data])
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}