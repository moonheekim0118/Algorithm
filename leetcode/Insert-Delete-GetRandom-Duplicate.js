/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.hashMap = new Map();
  this.list = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const has = this.hashMap.has(val);
  this.list.push(val);
  if (this.hashMap.has(val)) {
    this.hashMap.set(val, [...this.hashMap.get(val), this.list.length - 1]);
  } else {
    this.hashMap.set(val, [this.list.length - 1]);
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (this.hashMap.has(val)) {
    const indexList = this.hashMap.get(val);
    const lastIndex = indexList[indexList.length - 1];
    indexList.pop();
    this.list.splice(lastIndex, 1);
    this.hashMap.set(val, indexList);
  }
  return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return Math.floor(Math.random() * this.list.length);
};
