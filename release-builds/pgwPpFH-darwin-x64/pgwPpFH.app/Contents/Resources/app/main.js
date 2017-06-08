const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote
const template = [
  {
    label: 'Options',
      submenu: [
        {label: 'Preferences',
        accelerator: 'CmdOrCtrl+P',
          click: function () {
            if(!$("#preferences").dialog("isOpen")) {
              $("#preferences").dialog("open");

              const Store = require('electron-store');
              const store = new Store();
              var prefs =  ["jobstoprepdir", "uploadedartdir", "jobsonholddir", "cancelledjobsdir", "sizedefs", "stockdefs", "rules"];
              for (var i = 0, len = prefs.length; i < len; i++) {
                //console.log(prefs[i]+"---"+store.get(prefs[i]));
                $('#'+prefs[i]+'val').text(store.get(prefs[i]));
              }
              return false;
            } else {
              $("#preferences").dialog("close");
              return false;
            }
          }
        },
        {type: 'separator'},
        {label: 'Export product CSV\'s for Metrix'},
        {label: 'Export stock report CSV\'s '},
      ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://www.printergateway.com') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  //const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })

  // Window menu.
  template[2].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
/*
menu.append(
  new MenuItem(
    {label: 'AutomateIT',
      submenu: [
        {label: 'Preferences'},
        {type: 'separator'},
        {label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click: function () {
            window.close();
          }
        }
      ]
    }),
    new MenuItem(
    {label: 'Export...',
      submenu: [
        {label: 'Imposition CSV\'s'},
        {type: 'separator'},
        {label: 'Stock Reports'}
      ]
    }
  )
)

*/
