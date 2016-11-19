var fs = require('fs');

function parse(callback){

  var callbackForReadFile = function(err, filesContents) {


    var output = {
      addresses: []
    };

    var lines = filesContents.split('\r');

    for (var i =1; i < lines.length; i++){
      var line = lines[i];

      var values = line.split(',');

// what is being done
      output.addresses.push({
        street: values[0],
        city: values[1]

      });
    }

    callback(output);

}

fs.readFile('realestatedata.csv', 'utf-8', callbackForReadFile);
}


module.exports = parse;
