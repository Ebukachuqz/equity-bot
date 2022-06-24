# EQUITY BOT

---

Equity Bot is a web scrapper that logs into a MT4 account on (https://trade.mql5.com/trade?servers=), after providing correct credentials and then scrapes the current Balance, Equity and Marketwatch time at the time of scraping, from the account.

## Technologies Used

- Frontend: React Js & Material UI
- Backend: Node/Express Js
- Database: MongoDB

## Setting Up Locally

N.B: Make sure to have Nodejs, git(if you would be cloning the repo) installed locally

    SERVER

- Clone this repo with `git clone https://github.com/Ebukachuqz/equity-bot.git` or download the zip file
- In the terminal, Navigate to the **api** folder and run `npm install` to install all dependencies
- Create a .env file and provide all environment variables needed. Using .env.sample file as a guide.
- Then Navigate into the **client** folder and run `npm install` in the terminal, to install all dependencies for the client side.
- Then in the client folder, run `npm run build` in the terminal, to create a build directory with a client production build of the app.
  N.B: This is very important as express middleware in the server connects to the build file as its static file.
- Finally in the client directory, navigate out of it and into the api directory
- Then in the terminal, type `npm run devStart` and hit enter to run the app locally

<<<<<<< HEAD
N.B: The app runs on http://localhost:8080/
You can visit the api on http://localhost:8080/api
=======

### Live Link to DashBoard

https://equity-bot-scrapper.herokuapp.com/

### Live link to api

https://equity-bot-scrapper.herokuapp.com/api

Both frontend and backend are hosted on **HEROKU**

## Author

Ebuka Chuqz
