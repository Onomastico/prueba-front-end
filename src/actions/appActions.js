import { SET_APP_STATE } from './types';

export const setAppState = (newState) => (dispatch) => {
    console.log("Cambiando estado de la app a -> ", newState)
    dispatch({type: SET_APP_STATE, payload: newState});
};