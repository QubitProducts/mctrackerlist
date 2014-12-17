var stripPrototocol = require("./lib/strip_protocol");

function McTrackerList (rules) {
  if (rules) {
    this.compile(rules);
  }
  return this;
}

McTrackerList.prototype = {
  compile: function McCompile (rules) {
    if (!rules) {
      return this.compile(rules);
    }
    var lists = {
      black: [],
      white: []
    };
    var rule, l = rules.length;    
    while (l--) {
      rule = rules[l].trim().split(/\s+/);
      var instruction = rule.shift();
      var pattern = rule.join("").replace(/([\.\-\^\$\?\+\}\{\]\[])/gi, "\\" + "$1").replace(/\*/gi, ".");
      switch (instruction) {
        case "-":
          // substring match
          lists.black.push(pattern);
        break;
        case "+":
          // substring match
          lists.white.push(pattern);
        break;
        case "-d":
          // domain match
          lists.black.push("^" + pattern);
        break;
        case "+d":
          // domain match
          lists.white.push("^" + pattern);
        break;
      }
    }
    this.patterns = {
      black: new RegExp("(" + (lists.black.join("|") || ".^") + ")", "i"),
      white: new RegExp("(" + (lists.white.join("|") || ".^") + ")", "i")
    };
    return this;
  },
  match: function McMatch(url) {
    url = stripPrototocol(url);
    return this.patterns && (!this.patterns.white.test(url) && this.patterns.black.test(url));
  }
};

module.exports = McTrackerList;