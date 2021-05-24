/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.dictionary = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.dictionary.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (word.includes(".")) {
    const wordLength = word.length;
    for (let i = 0; i < this.dictionary.length; i++) {
      const picked = this.dictionary[i];
      if (picked.length !== wordLength) continue;
      let flag = true;
      for (let j = 0; j < wordLength; j++) {
        if (picked[j] !== word[j] && word[j] !== ".") {
          flag = false;
          break;
        }
      }
      if (flag) return true;
    }
    return false;
  } else {
    return this.dictionary.indexOf(word) !== -1;
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
