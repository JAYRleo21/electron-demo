//npm init
//npm install electron
//create main.js
//create build folder (icon)
//npm install electron-builder --save-dev (electron builder)
var electron = require('electron');var
  app = electron.app,BrowserWindow = electron.BrowserWindow;
var path = require('path');
var url = require('url');
var win = void 0;
function createWindow() {
  win = new BrowserWindow({ width: 1600, height: 900, minWidth: 1280, minHeight: 640 });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true })
  );
}
app.on('ready', createWindow);
