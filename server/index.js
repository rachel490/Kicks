const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + '/db.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + '/../build/')
});

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
  jsonServer.rewriter({
    '/v1/users/chatting': '/chatList',
    '/v1/users/chatting/:id': '/chatRoom/:id',
    '/v1/videos': '/videos',
    '/v1/videos/:id': '/video/:id',
    '/v1/users/my/videos': '/myVideos',
    '/v1/users/my/likes': '/myLikes',
    '/v1/users/following/from': '/following',
    '/v1/users/following/to': '/follower'
  })
);

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
