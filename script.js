const user = { name: 'John' };

const proxy = new Proxy(user, {
  get(target, prop) {
    return prop in target ? target[prop] : 'Not found';
  },
});

console.log(proxy.name); // John
console.log(proxy.age); // Not found
