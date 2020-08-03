Microdash
=========

[![Build Status](https://github.com/asmblah/microdash/workflows/CI/badge.svg)](https://github.com/asmblah/microdash/actions?query=workflow%3ACI)

Micro version of lodash.

Contains support for only the following methods:

.each(...)
----------
```javascript
_.each([1, 2, 3], function (value, key) { ... });
```

.escapeRegExp(...)
------------------
```javascript
console.log(_.escapeRegExp('My [string]')); // 'My \[string\]'
```

.extend(...)
------------
```javascript
_.extend({}, defaults, {
    open: function () { ... }
});
```

.filter(...)
------------
```javascript
_.filter([1, 2, 3], function (value) {
    return value >= 2;
});
```

.forOwn(...)
------------
```javascript
_.forOwn({a: 1, b: 2}, function (value, key) { ... });
```

.isArray(...)
-------------
```javascript
console.log(_.isArray([1, 2, 3));   // true
console.log(_.isArray({length: 2}); // false
```

.isBoolean(...)
---------------
```javascript
console.log(_.isBoolean(false)); // true
console.log(_.isBoolean(21));    // false
```

.isFunction(...)
----------------
```javascript
console.log(_.isFunction(function () {}));  // true
console.log(_.isFunction(21));              // false
```

.isNumber(...)
--------------
```javascript
console.log(_.isNumber(123));   // true
console.log(_.isNumber('hi'));  // false
```

.isPlainObject(...)
-------------------
```javascript
console.log(_.isPlainObject({a: 1}));   // true
console.log(_.isPlainObject([1, 2]));   // false
```

.isString(...)
--------------
```javascript
console.log(_.isString('my string'));   // true
console.log(_.isString(321));           // false
```

.map(...)
---------
```javascript
_.map([1, 2, 3], function (value) {
    return value * 2;
});
```

Keeping up to date
------------------
- [Follow me on Twitter](https://twitter.com/@asmblah) for updates: [https://twitter.com/@asmblah](https://twitter.com/@asmblah)
