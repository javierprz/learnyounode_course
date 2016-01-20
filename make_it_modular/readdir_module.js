// Include 'fs' and 'path' modules
var fs = require('fs');
var path = require('path');

// Export our read and filter function
module.exports = function (dir_path, file_ext, resultCallback){
    fs.readdir(dir_path, function(err,files){
      if(err){
        // If there is an error, pass this error to callback
        resultCallback(err);
      }

      var extension = "." + file_ext;
      var filtered_files = [];
      for(var i=0; i<files.length; i++){
        if(path.extname(files[i]) == extension){
          filtered_files.push(files[i]);
        }
      }
      resultCallback(null, filtered_files);
    });
}
