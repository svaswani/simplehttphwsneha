var fs = require('fs');

var image = fs.readFileSync(__dirname + "/../client/spongegar.png");

var getImage = function(request, response){
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(image);
    response.end();
};

module.exports.getImage = getImage;