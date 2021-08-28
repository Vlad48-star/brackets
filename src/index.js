 module.exports = function check(str, brakConfig) {
  let brackets = str;
  let count = 0;

  while (brackets) {
    for (let i = 0; i < brakConfig.length; i++) {
      brackets = brackets.split(brakConfig[i].join("")).join("");
    }

    count++;
    if (count > str.length / 2) return false;
  }

  return true;
};