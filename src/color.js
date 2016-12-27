const Color = require('color');



var colorTest = Color('rgba(0,0,0, 0.1)').fade(0.5).rgb().toString();

console.log(colorTest);