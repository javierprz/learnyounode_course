// Require 'fs' module
var fs = require('fs');

var file_path = process.argv[2];
fs.readFile(file_path, readFileCallback);

function readFileCallback(err,data){
  if(err){
    // Throw error if there is any
    throw err;
  }

  var file_str = data.toString();
  var file_lines = file_str.split("\n");

  console.log(file_lines.length - 1);
}
