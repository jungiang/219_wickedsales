import types from './types';
import axios from 'axios';

export const signIn = user => {
    return function (dispatch) {
        axios.get('/api/sign-in.php').then(resp => {
            console.log(resp);
            if (resp.data.success) {
                dispatch({
                    type: types.SIGN_IN
                })
            } else {
                dispatch({
                    type: types.SIGN_IN_ERROR
                })
            }

        })
    }
}

//Make action creator for sign out
//Make the action type SIGN_OUT
export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}

export function getAllProducts() {
    return function (dispatch) {
        axios.get('/api/getproducts.php').then((resp) => {
            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            })
        })
    }
}