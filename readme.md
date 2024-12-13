
# EdTech Platform Prototype



## Features

- Light/dark mode toggle
- Dashboard
- Fullscreen mode
- Smallscreen mode
- Authentication & authorization



## Tech Stack

**Client:** React, Redux, TailwindCSS, Typescript

**Server:** Node, Express, Typescript, MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### Client (react app)
`SERVER` = `SERVER URL`
### Server
`PORT` = `3000`

`SECRET` = `SECERT KEY FOR JWT`

`MONGO_URI` = `MONGODB  CONNECTION STRING`

`CLIENT` = `REACT APP URL`


## Run Locally

Clone the project

```bash
  git clone https://github.com/AbhinandIdikayil/rappyd_lauch_test
```

Go to the project directory

```bash
  cd client
```
```bash
  cd server
```
Install dependencies on both directories

```bash
  npm install
```
Start the react app

```bash
  npm run dev
```

Start the server

```bash
  npm run dev:watch
```

