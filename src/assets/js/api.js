const origin = __DEV__ ? 'http://10.1.10.63:8000/api' : 'https://www.silenyang.com/api';

const Fetch = async (url, method = 'GET', data = {}) => {
    let sid = null;
    await $.storage.getItem('sid').then(id => {
        sid = id || '';
    });
    const options = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            sid
        }
    };
    console.log(origin + url);
    return fetch(
        `${origin}${url}`,
        method !== 'POST' ? options : Object.assign(options, { body: JSON.stringify(data) })
    ).then(res => {
        const sid = res.headers.map.sid && res.headers.map.sid[0];
        $.storage.setItem('sid', sid);
        return res.json();
    });
};

export default {
    login: () => {
        return Fetch(`/login`, 'POST', {
            code: '123456',
            fakeId: 123456
        });
    },
    giftGift: id => {
        return Fetch(`/gift/${id}`);
    },
    giftList: (page = 1) => {
        return Fetch(`/gifts/${page}`);
    }
};
