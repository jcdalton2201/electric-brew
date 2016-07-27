'use strict';
require('reflect-metadata');
require('babel-polyfill');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', () =>{
  if(process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width:1900,
    height:800
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('close', () =>{
    mainWindow = null;
  })
});
