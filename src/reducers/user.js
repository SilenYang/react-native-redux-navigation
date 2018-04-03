const defaultUser = {
    point: 0,
    totalPoint: 0,
    level: 1
};

const User = (state = defaultUser, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.user };
        default:
            return state;
    }
};

export default User;
