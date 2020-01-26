const http = require('http');
const htmlHandler = require('./htmlResponses');
const mediaHandler = require('./mediaResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/': htmlHandler.getIndex(req, res);
      break;
    case '/page2': htmlHandler.getPage2(req, res);
      break;
    case '/page3': htmlHandler.getPage3(req, res);
      break;
    case '/party': mediaHandler.loadFile(req, res, '../client/party.mp4', 'video/mp4');
      break;
    case '/bling': mediaHandler.loadFile(req, res, '../client/bling.mp3', 'audio/mp3');
      break;
    case '/bird': mediaHandler.loadFile(req, res, '../client/bird.mp4', 'video/mp4');
      break;
    default: htmlHandler.getIndex(req, res);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on port:${port}`);
