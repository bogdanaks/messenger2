# React Real-Time Chat App(Telegram disignet)

### About:

This is a real-time chat application built using React (Create React App on the frontend) and NodeJS/Express/Socket.io Backend.

Users are able to join groups and message other users in real-time.

### Tech Stack:

* NodeJS/Express
* SOCKET.IO
* React (Create React App)
* SASS
* JWT Auth

### Screenshot

<p align="center">
    <img src="https://i.imgur.com/1thct32.png">  
</p>

## Software 

Before proceeding, please ensure you have the following software installed on your computer.

* Node
* Git command line tools

### Useful links

* Download Git CLT - Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Download Node - https://nodejs.org
* Download VSCode - https://code.visualstudio.com/

## Getting started

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

### Download & Install Dependencies on your machine 

Clone the repo to your machine 

```
git clone <CloneURL>
```

### Lunch the backend

1)	Within terminal or cmd ensure you have navigated inside the 'Backend' directory and installed the dependencies

```
cd <../path/to/server> 
npm install
```
2)	Create a .env file and write down the variables NODE_ENV, DB_URL, SECRET_KEY

3) Run the start script

``` 
npm run server
```

### Lunch the frontend

1) Open a new terminal window and navigate inside the 'Frontend' folder as you will need to keep the backend running in the background

```
cd <../path/to/client> 
npm install
```

2) Run the start script

``` 
npm run start
```
Your app should be running on: http://localhost:3000
