const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote
const template = [
  {
    label: 'simone',
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
  },
  {
    label: 'Export...',
      submenu: [
        {label: 'Imposition CSV\'s'},
        {type: 'separator'},
        {label: 'Stock Reports'}
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
  const name = app.getName()
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
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  )
  // Window menu.
  template[3].submenu = [
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
