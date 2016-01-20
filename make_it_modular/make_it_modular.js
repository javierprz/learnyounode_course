// Require our created module
var readdir_module = require('./readdir_module.js');

var dir_path = process.argv[2];
var file_ext = process.argv[3];

readdir_module(dir_path, file_ext, resultCallback);

// Result function
function resultCallback(err, data){
  if(err){
    throw err;
  }

  for(var i=0; i<data.length; i++){
    console.log(data[i]);
  }
}
