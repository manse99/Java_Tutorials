function simplifyObject(myCar) {
    return Object.keys(myCar)
        .filter(k => k.indexOf('_') !== 0)
        .filter(k => typeof object[k] !== 'function')
        .filter(k => typeof object[k] !== 'object')
        .reduce((obj, key) => {
            obj[key] = object[key];
            return obj;
        }, {});
}