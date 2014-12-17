var fs = require("fs");
var path = require("path");
var expect = require("chai").expect;
var trackerProtectionList = fs.readFileSync(path.join(__dirname, "test.txt")).toString().split("\n");
var McTrackerList = require("../mctrackerlist");
var mctrackerlist = new McTrackerList(trackerProtectionList);

describe("real tlp", function () {

  it("should match", function () {
    [
      "https://ssl.google-analytics.com/ga_exp.js",
    ].forEach(function (url) {
      expect(mctrackerlist.match(url)).to.eql(true, url);
    });
  });

});