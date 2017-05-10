const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

//screen definitions
//var screenElectron = electron.screen;
//var mainScreen = screenElectron.getPrimaryDisplay();
//var dimensions = mainScreen.size;
//console.log(dimensions.width + "x" + dimensions.height);
//const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

function createMainWindow () {
  //get screen dimensions for window placement
  const electron = require('electron');
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var allScreens = screenElectron.getAllDisplays();
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: dimensions.height-45,
    transparent: false,frame: true,toolbar: true,resizable: false,titleBarStyle:'default',type:'textured',kiosk: false,acceptFirstMouse: false})

  mainWindow.setPosition(dimensions.width-800, 1)

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/main.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function createDropWindow () {
  //get screen dimensions for window placement
  const electron = require('electron');
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var allScreens = screenElectron.getAllDisplays();
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  // Create the browser window.
  dropWindow = new BrowserWindow({width: 300, height: 300,
    transparent: false,frame: true,toolbar: true,resizable: false,titleBarStyle:'default',type:'textured',kiosk: false,acceptFirstMouse: false})

  dropWindow.setPosition(1, 1)

  // and load the index.html of the app.
  dropWindow.loadURL(`file://${__dirname}/drop.html`)

  // Open the DevTools.
  //dropWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  dropWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    dropWindow = null
  })
}




// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow, createDropWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
//  if (process.platform !== 'darwin') {
    app.quit()
//  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
