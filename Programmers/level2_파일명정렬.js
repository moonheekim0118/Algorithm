function solution(files) {
  files = files.map((v, i) => {
    return { fileName: v, index: i };
  });

  function compare(a, b) {
    const reg = /(\D*)([0-9]*)/i;
    const A = a.fileName.match(reg);
    const B = b.fileName.match(reg);

    const header = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const number = Number(A[2]) - Number(B[2]);

    return header || number || a.index - b.index;
  }

  files.sort((a, b) => compare(a, b));
  return files.map((v) => v.fileName);
}

console.log(solution(["ABC12", "AbC12", "aBc12"]));
