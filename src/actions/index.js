import types from './types';

export const signIn = user => {
    console.log('Sign In Action Creator, user data:', user);
    return {
        type: types.SIGN_IN,
        email: user.email
    }
}

//Make action creator for sign out
//Make the action type SIGN_OUT
export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}