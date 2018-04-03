import React, { AsyncStorage } from 'react-native';

export default {
    setItem: (key, value) => key && value && AsyncStorage.setItem(key, JSON.stringify(value)),
    mergeItem: (key, value) => key && value && AsyncStorage.mergeItem(key, JSON.stringify(value)),
    getItem: key => AsyncStorage.getItem(key).then(value => JSON.parse(value)),
    // 删除多个[key1,key2]
    multiRemove: keys => AsyncStorage.multiRemove(keys),
    // 获取多个[key1,key2]
    multiGet: keys =>
        AsyncStorage.multiGet(keys).then(results => {
            return results.map(item => {
                return [item[0], JSON.parse(item[1])];
            });
        }),
    clear: AsyncStorage.clear,
    removeItem: AsyncStorage.removeItem
};
