export default (store) => (next) => (action) => {
    //code goes here
    if(typeof action !== 'function'){
        return next(action);
    }

    return action(store.dispatch);
}