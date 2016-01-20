// Require 'fs' module 
var fs = require('fs');

var file_path = process.argv[2];
var file_buffer = fs.readFileSync(file_path);
var file_str = file_buffer.toString();
var file_lines = file_str.split("\n");

console.log(file_lines.length - 1);