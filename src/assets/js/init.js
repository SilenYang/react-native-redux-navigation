import storage from './storage';

const init = () => {
    global.$ = {
        storage
    };
};

export default init;
