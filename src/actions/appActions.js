import { SET_APP_STATE } from './types';

export const setAppState = (newState) => (dispatch) => {
    dispatch({type: SET_APP_STATE, payload: newState});
};