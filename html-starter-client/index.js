let path = require("path");
let sly = require("sly-webserver");
let server = new sly.Server();
const rootDir = `${__dirname}`;
const webRootName = "wwwsites";
const wwwRoot = path.join(rootDir, webRootName);

server.startServer(wwwRoot);