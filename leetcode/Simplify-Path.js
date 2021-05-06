// node Simplify-Path
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  path = path.split("/");

  for (let e of path) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      if (stack.length > 1) {
        stack.pop();
        stack.pop();
      }
    } else {
      stack.push("/");
      stack.push(e);
    }
  }
  if (stack.length === 0) stack.push("/");
  return stack.join("");
};

console.log(simplifyPath("/home/../a/"));

//case "/home/../a"
