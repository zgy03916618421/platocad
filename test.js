/**
 * Created by Administrator on 2016/8/25.
 */
var Canvas = require('canvas');
var path = require('path');
var fs = require('fs');
var w = 720;
var h = 840;
var canvas = new Canvas(w,h);
var buffer = new Buffer('知性');
console.log(buffer);
var context = canvas.getContext('2d');
context.font = '50px PingFangSC-Regular';
context.fillText('知性', 100, 200);
var buff = canvas.toBuffer();
fs.writeFileSync('test1.png',buff);