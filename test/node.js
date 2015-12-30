/* globals describe it */
var fs = require('fs')
var path = require('path')
var expect = require('chai').expect
var McTrackerList = require('../mctrackerlist')
var list = String(fs.readFileSync(path.join(__dirname, 'fixture.txt'))).split('\n')
var mctrackerlist = new McTrackerList(list)

describe('real tlp', function () {
  it('should match', function () {
    var url = 'https://ssl.google-analytics.com/ga_exp.js'
    expect(mctrackerlist.match(url)).to.eql(true, url)
  })
})
