const {app,BrowserWindow} = require("electron")
const path = require("path")
//  /cxxx
//path.join("/c",'xxxxxxxx')
const createWindow=()=>{
    const mainWindow = new BrowserWindow({
        width:600,
        height:400,
        webPreferences: {
            nodeIntegration:true
        }
    })
    mainWindow.loadFile(path.join(__dirname,"index.html"))
}


//监听应用的启动事件
app.on("ready",createWindow)


//监听窗口关闭的事件，关闭的时候退出应用，masOs 需要排除

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

//Macos中点击dock中的应用图标的时候重新创建窗口
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})