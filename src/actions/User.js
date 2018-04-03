export default {
    update: user => {
        return { type: 'UPDATE_USER', user };
        // return dispatch => dispatch({ type: 'UPDATE_USER', user });
    }
};
