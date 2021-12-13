import { createStore } from 'redux';
import { Initial } from 'Assets/Initial/Initial.js'

const initialState = {
    items: [
        ...Initial,
    ],
}

export const addItem = (payload) => {
    return {
        type: 'item/add',
        payload,
    }
} 

export const removeItem = (payload) => {
    return {
        type: 'item/remove',
        payload,
    }
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'item/add':
            return {
                ...state, items: [...state.items, action.payload]
            };
        case 'item/remove':
            return {
                ...state, items: state.items.filter((item) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export const store = createStore(itemsReducer);