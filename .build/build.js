let scrape = require('website-scraper');
let path = require('path')
let options = {
  urls: ['http://moztw.mcuisc.club/'],
  directory: path.resolve(__dirname, '../dist/'),
  urlFilter: (url) => url.startsWith('http://moztw.mcuisc.club'),
  filenameGenerator: 'bySiteStructure',
  recursive: true
};

// with promise
scrape(options).then(console.log).catch(console.log);
