# EQUITY BOT

---

Equity Bot is a web scrapper that logs into a MT4 account on (https://trade.mql5.com/trade?servers=) from after providing correct credentials and then scapes the current Balance, Equity and Marketwatch time at the time of scraping from the account.

## Technologies Used

- Frontend: React Js & Material UI
- Backend: Node/Express Js
- Database: MongoDB

## Setting Up Locally

N.B: Make sure to have Nodejs, git(if you are going to clone the repo) installed locally

    SERVER

- Clone this repo with `git clone https://github.com/Ebukachuqz/equity-bot.git` or download the zip file
- Navigate to the **api** folder and run `npm install` in terminal, to install all dependencies
- Create a .env file and provide all environment variables needed (as seen in .env.sample file)
- Then in the terminal, type `npm run devStart` and hit enter to the start server in developement mode

    CLIENT

- After you must have started the server, open another terminal and navigate to the client folder
- run `npm install` to install all dependencies
- Then in the terminal, type `npm start` and hit enter to start the client side

### Live Link to project 
(https://equity-bot-scrapper.herokuapp.com/)

### Live link to api
https://equity-bot-scrapper.herokuapp.com/api

Both frontend and backend are hosted on **HEROKU**

## Author

Ebuka Chuqz
