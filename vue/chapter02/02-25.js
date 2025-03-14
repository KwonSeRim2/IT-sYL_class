let arr = [10, 20, 30];

const proxy = new Proxy(arr, {
  get: function (target, key, receiver) {
    console.log('## get ' + key);
    if (!target[key]) throw new Error(`존재하지 않는 솟성 ${key}입니다.`);
    return target[key];
  },
  set: function (target, key, value) {
    console.log('## set ' + key);
    if (!target[key]) throw new Error(`존재하지 않는 솟성 ${key}입니다.`);
    target[(key = value)];
    return true;
  },
});

proxy[1] = 99;
