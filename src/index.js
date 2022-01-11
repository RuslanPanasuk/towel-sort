
module.exports = function towelSort (matrix = []) {
  let result = [];

  matrix.forEach((item, i) => {
    if (i % 2 !== 0) {
      result.push(...(item.reverse()));
    } else {
      result.push(...(item));
    }
  });

  return result;
}
