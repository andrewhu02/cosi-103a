## COSI103 Group J
Andrew Hu (andrewhu@brandeis.edu)\
Charles Sullivan (charlessullivan@brandeis.edu)\
Nhi Le (nhihllle@brandeis.edu)\
Aimuan Erhabor (aimuanerhabor@brandeis.edu)\
Moses Gordon (mosesgordon@brandeis.edu)

# Recipes Website 
This is a website for browsing and reading recipes.
Current features:
* Landing page displaying a picture and description of each recipe with a link to that recipe's page
* Recipe pages describing each recipe and how to make it
* Team page with names, pictures, and short descriptions for each member
* Grocery list which persists across page changes
* User can add items, remove items, and clear the list
* Cooking mode which can be activated on any recipe page, showing instructions on a large slideshow
* User can add new recipes (recipe title, description, image (option) and some text

## Setup

Run this project from the recipes directory.\
Install dependencies with npm then run `npm start`.
```shell
cd recipes
npm install
npm start
```

Use `npm test` in the recipes directory to launch the test runner.

## Development
* App.js contains the main structure of the app, which uses a React Router to move between pages
* pages directory contains each page of the website
* shared directory contains components displayed on multiple pages
* Testing for React components will run when a pull request is made to main
* Recipe data pulls from a recipe API on an express.js server

## Azure Alerts

We set up 3 alerts on Azure to cover some scenarios or error conditions that are likely for our application. For these metrics, we define these parameters: check every - how often the alert rule will check if the condition is met, and lookback period - the time period to look back at each time the data is checked. For example, with a check every of 1 minute and lookback of 1 hour, we will check the metric every one minute, at each check, looking back the past 1 hour.

* **Number of requests per hour:** send an alert (level 2 - warning) when the number of requests made through the app exceeds 1000 per hour. Check every 1 minute, lookback 1 hour.
* **Number of replica:** the number of copies of an image that will be kept in a region. Send an alert (level 3 - informational) when the number of image replica exceeds 1. Check every 1 hour, lookback 1 hour.
* **Average CPU core usage:** send an alert (level 3 - informational) when the average CPU core usage exceeds 1. Check every 1 hour, lookback 24 hours.
