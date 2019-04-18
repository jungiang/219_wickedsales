export const signIn = user => {
    console.log('Sign In Action Creator, user data:', user);
    return {
        type: 'SIGN_IN'
    }
}