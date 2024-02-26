## COSI103 Group J
Andrew Hu (andrewhu@brandeis.edu)\
Charles Sullivan (charlessullivan@brandeis.edu)\
Nhi Le (nhihllle@brandeis.edu)\
Aimuan Erhabor (aimuanerhabor@brandeis.edu)

# Recipes Website 
This is a website for browsing and reading recipes.
Current features:
* Landing page displaying a picture and description of each recipe with a link to that recipe's page
* Recipe pages describing each recipe and how to make it
* Team page with names, pictures, and short descriptions for each member
* Grocery list which persists across page changes
* User can add items, remove items, and clear the list
* Cooking mode which can be activated on any recipe page, showing instructions on a large slideshow

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