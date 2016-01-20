// 'fs' and 'path' modules
var fs = require('fs');
var path = require('path');

var dir_path = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(dir_path,readDirCallback);

function readDirCallback(err,files){
  if(err){
    throw err;
  }

  for(var i=0; i<files.length; i++){
    if(path.extname(files[i]) == extension){
      console.log(files[i]);
    }
  }
}
