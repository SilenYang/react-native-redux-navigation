import Routers from '../routers';

const recentlyVisitedRoutes = new Set();
const navReducers = (state, action) => {
    if (action.type === 'Navigation/NAVIGATE') {
        if (recentlyVisitedRoutes.has(action.routeName)) {
            return state;
        }
        recentlyVisitedRoutes.add(action.routeName);
        setTimeout(() => {
            recentlyVisitedRoutes.delete(action.routeName);
        }, 400);
    }
    const newState = Routers.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducers;
