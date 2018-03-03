var list = require('./formattedList.js')

const imdb = require('imdb-api');


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



var movieList = []

_.forEach(list, function(value) {
  if(value.type == "movie" && value.title.length <= 10){
    movieList.push({'date': value.date, 'title':value.title, 'type':value.type, 'episode':value.episode})
  }
});
console.log(movieList.length)

for(i=0; i<1; i++){
  console.log(movieList[5])
  imdb.search({title: movieList[10].title}, {apiKey: 'API KEY'}).then(console.log).catch(console.log)
}

//console.log(list[4].title)
//imdb.get('The Bomb', {apiKey: 'API KEY', timeout: 30000}).then(console.log).catch(console.log);
//imdb.getById('tt0869673', {apiKey: 'API KEY ', timeout: 30000}).then(console.log).catch(console.log);

/*imdb.search({
  title: 'How I Met Your Mother'
}, {
  apiKey: 'API KEY'
}).then(console.log).catch(console.log);
*/
/*
imdb.get('How I Met Your Mother', {apiKey: 'API KEY'}).then(things => {
    things.episodes('Purple Giraffe').then(console.log);
});
*/
//https://github.com/mikeal/spider
//https://github.com/simplecrawler/simplecrawler *
//https://github.com/bda-research/node-crawler


//For images, imdb is encrypted,
//maybe crawl Netflix for meta,
//or try
//http://www.omdbapi.com/
