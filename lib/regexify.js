module.exports = function (str) {
  return str.replace(/([\.\-\^\$\?\+\}\{\]\[])/gi, "\\" + "$1").replace(/\*/gi, ".*");
};