/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  const hash = new Set();
  folder.sort((a, b) => a.length - b.length);
  folder.forEach((file) => {
    const tmp = file.split("/");
    let window = "";
    let flag = true;
    for (let i = 1; i < tmp.length; i++) {
      window += "/" + tmp[i];
      if (hash.has(window)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      hash.add(tmp.join("/"));
    }
  });
  return [...hash];
};
