# open-history-map 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  [![Slack Status](https://img.shields.io/badge/chat-on%20Slack-brightgreen)](https://open-history-map.slack.com)  
An open-source historical map empowering open-source historical information editing.

## Overview
- Purpose: This project is aiming to create a user-friendly platform for history lover creating GIS-based information system.  
Data including(more data types will be added in future):
  - Historical border
  - Historical figure
  - Historical events
- Entry Point:
  - /map  
  ![Map screenshot](https://i.ibb.co/jTpS5m1/map-screenshot.png)
  - /feature-editor
  ![feature-editor screenshot](https://i.ibb.co/SQ1Ph3K/feature-editor-roman-screenshot.png)
  - /feature-list
  ![feature-list screenshot](https://i.ibb.co/y44nSHF/feature-list-screenshot.png)
  
  > most data's title right now is in Chinese. Will translate and support multiple language in future.

- Data Source:  
  Initial data are collected through internet and all in GeoJSON form.  
  Data is placed in [open-history-map-data](https://github.com/sxc562586657/open-history-map-data)  

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Tileserver
- #### Install tileserver
  ```
  $ npm install -g tileserver-gl-light
  ```

---

## Install

    $ git clone https://github.com/sxc562586657/open-history-map.git
    $ cd open-history-map
    $ npm install

## Configure app

Create `/client/.env.local` then edit it with your settings. You will need:

- REACT_APP_MAPBOX_ACCESS_TOKEN
  - token for display mapbox
- REACT_APP_TILESERVER_HOST
  - host address of the tileserver
- REACT_APP_DEFAULT_YEAR
  - default year for map display of /map
- REACT_APP_BACKEND_SERVER
  - host address of the backend server

### Sample `.env.local`

```
REACT_APP_MAPBOX_ACCESS_TOKEN=pk.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxnxxxxxx
REACT_APP_TILESERVER_HOST=http://localhost:3000
REACT_APP_DEFAULT_YEAR=AD1783
REACT_APP_BACKEND_SERVER=http://localhost:5000
```
## Install and start MongoDB
- Install MongoDB  
  [MongoDB Official Manual](https://docs.mongodb.com/manual/installation/)
- Start MongoDB 
    ```
    $ sudo service mongodb start
    ```

## Import data from repo
```
git clone https://github.com/sxc562586657/open-history-map-data
cd open-history-map-data
./import_data.sh
```

## Running the project(Including NodeJS server & React app)

    $ npm run dev

## Running the backend standalone
    
    $ npm run server

## Running the frontend standalone
    
    $ npm run client

## Export data from MongoDB
```
cd open-history-map-data
./export_data.sh
```

## Default Entry Point
- Frontend: [localhost:8081](localhost:8081)
- Backend: [localhost:5000](localhost:5000)