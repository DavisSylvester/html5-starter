let path = require("path");
let cors = require("cors");
let sly = require("sly-webserver");

const rootDir = `${__dirname}`;
const webRootName = "wwwsites";
const wwwRoot = path.join(rootDir, webRootName);

let server = new sly.Server(true, wwwRoot);
var corsOptions = {
    origin: 'http://localhost:5304',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 204
  }

server.App.options('*', cors(corsOptions));
server.App.use(cors(corsOptions));
server.App.post('/', ()=> {
 console.log(`Help Logging`);
  
});

server.startServer();

// let http = require('http').Server(server.App);
// let socket = require("socket.io")(http);
// server.startServer(wwwRoot);

// socket.on('connection', (socket) =>{
//     console.log(`connection`);
//     console.log('a user is connected');
//    });

//    http.listen(5303, () => {
//      console.log(`starting on 5303`);
//    });