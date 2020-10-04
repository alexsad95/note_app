import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types";

const handlers = {
    [ADD_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: [...state.notes, payload]
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: state.notes.filter(note => note.id !== payload)
    }),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};