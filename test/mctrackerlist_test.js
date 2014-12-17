var McTrackerList = require("../mctrackerlist");
var expect = require("chai").expect;

describe("McTrackerList", function () {
  var mctrackerlist;

  beforeEach(function () {
    mctrackerlist = new McTrackerList();
  });

  beforeEach(function () {
    mctrackerlist.compile([

      // blacklist domain
      "-d www.google.com",

      // whitelist domain
      "+d www.elephantmouse.com",

      // blacklist substring
      "- chickenwing.cup",

      // whitelist substring
      "+ bee/hut"

    ]);
  });

  it("should match a blacklisted domain", function () {
    expect(mctrackerlist.match("www.google.com")).to.eql(true);
  });

  it("should not match a blacklisted domain with a whitelisted substring", function () {
    expect(mctrackerlist.match("www.google.com/bee/hut")).to.eql(false);
  });

  it("should match a blacklisted substring", function () {
    expect(mctrackerlist.match("www.sidewalk.com/chickenwing.cup")).to.eql(true);
  });

  it("should not match a blacklisted substring with a whitelisted substring", function () {
    expect(mctrackerlist.match("www.blah.com/bee/hut/chickenwing.cup")).to.eql(false);
  });

  it("should not match a blacklisted substring with a whitelisted domain", function () {
    expect(mctrackerlist.match("www.elephantmouse.com/chickenwing.cup")).to.eql(false);
  });

  describe("domain", function () {

    beforeEach(function () {
      mctrackerlist.compile([
        // blacklist domain
        "-d google-analytics.com /furrylegferret.js"
      ]);
    });

    it("should match a substring in the domain", function () {
      expect(mctrackerlist.match("https://ssl.google-analytics.com/furrylegferret.js")).to.eql(true);
    });

  });

});