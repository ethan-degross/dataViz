//depending on what your data looks like, you may need to change
//need to find a website crawler that will pull the html from ...../moviesyouveseen
//need to add in all the regex statements here
//pulls in your previous version of your data that needs to be formatted
var list = require('./dataTest7.js')
//lodash
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');



var formattedList = []

_.forEach(list, function(value) {
  var event = new Date(value.date)
  var jsonDate = event.toJSON();
  if(value.type == undefined){
    value.type = "movie"
    value.episode = "NA"
  }
  formattedList.push({'date': jsonDate, 'title':value.title, 'type':value.type, 'episode':value.episode})
});

var fs = require('fs')
fs.writeFile('./formattedList.js', "var formattedList = " + JSON.stringify(formattedList, null, 4) + "module.exports = formattedList", 'utf-8', function(err) {
  if (err) throw err
  console.log('Done!')
})
