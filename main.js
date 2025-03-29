const { app, BrowserWindow } =  require('electron')
const { Menu } = require('electron')

Menu.setApplicationMenu(null)

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 680,
        
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)