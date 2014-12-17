# McTrackerList

A utility lib for working with Tracking Protection Lists that works both in node and in the browser 

# Usage

```javascript
  var mc = require("mctrackerlist");

  // compile some rules
  mc.compile([

    // blacklist domain
    "-d www.google.com",

    // whitelist domain
    "+d www.elephantmouse.com",

    // blacklist substring
    "- chickenwing.cup",

    // whitelist substring
    "+ bee/hut"

  ]);

  mc.match("www.google.com"); // true
  mc.match("www.google.com/bee/hut"); // false
  mc.match("www.sidewalk.com/chickenwing.cup"); // true
  mc.match("www.elephantmouse.com/chickenwing.cup"); // false
```

# Run tests

npm test
