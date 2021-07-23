var concat = require('concat');

const files = [
    './dist/ff-ausloser/runtime-es2015.js',
    './dist/ff-ausloser/polyfills-es2015.js',
    './dist/ff-ausloser/main-es2015.js'
]

concat(files, './dist/packed/main-ausloser.js')
console.info('Custom elements created successfully!')