# McTrackerList

A Tracking Protection List lib for node and the browser

## usage

```js
  var McTrackerList = require("mctrackerlist")

  mc = new McTrackerList([
    // blacklist domain
    '-d www.google.com',
    // whitelist domain
    '+d www.elephantmouse.com',
    // blacklist substring
    '- chickenwing.cup',
    // whitelist substring
    '+ bee/hut'
  ])

  mc.match('www.google.com') // true
  mc.match('www.google.com/bee/hut') // false
  mc.match('www.sidewalk.com/chickenwing.cup') // true
  mc.match('www.elephantmouse.com/chickenwing.cup') // false

  // update rules
  mc.compile([
    // whitelist domain
    '+d www.google.com',
    // blacklist domain
    '-d www.elephantmouse.com',
    // blacklist substring
    '- chickenwing.cup',
    // whitelist substring
    '+ bee/hut'
  ])
```

## run tests

make test
