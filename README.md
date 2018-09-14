## iLearn
Want to learn Spanish? This application allows users to track their progress and master Spanish vocabulary. 

## Description

This is a simple app that uses spaced repetition to improve learning. Users can create their own accounts and begin tracking their progress. 

## Link to Application

I used heroku to deploy this application: https://jon-filipp-spcrep-client.herokuapp.com/

The backend can be found here: https://github.com/thinkful-ei22/jon-filipp-spaced-repetition-server

### A dummy user has been set-up:
    Username: test 
    Password: password

##  Screenshots
### *The home page, where users can search for and browse other events:
<img width="400" height="200" alt="ss1" src="https://user-images.githubusercontent.com/38267761/44282505-1e84db80-a210-11e8-8992-9a9b9fa641b7.png">       <img width="400" alt="ss1 5" src="https://user-images.githubusercontent.com/38267761/44282509-22186280-a210-11e8-8930-5dccc6710348.png">


###  *Sign-up/Login page:
<img width="400" alt="ss2" src="https://user-images.githubusercontent.com/38267761/44282518-26dd1680-a210-11e8-9d53-644e903d2187.png"> <img width="400" alt="ss3" src="https://user-images.githubusercontent.com/38267761/44282520-26dd1680-a210-11e8-987e-86270cca636b.png">


### *A page where registered users can create their events:
<img width="600" alt="ss4" src="https://user-images.githubusercontent.com/38267761/44282517-26dd1680-a210-11e8-9315-273d7ebd8b32.png">

### *A page to show the details of an event:
<img width="600" alt="ss5" src="https://user-images.githubusercontent.com/38267761/44282524-280e4380-a210-11e8-8d15-d26205bff743.png">


## Tech Stack

This app was created using React for the front-end, and Node for the back-end.

*Front-end*: 
React, Redux, JWT-Decode


*Back-end*:
Express, Node, Passport, Dotenv, BcryptJs

## Key Parts

This app has many components, but the main ones consist of: **App**, **Sign-up (or Login)**, **EventCreator** , and **EventList**.

All of the components live in the src/components/<name of component> directory.

_App_: The job of the App component is to handle the routes for the components, as well as mount the get/events data upon loading.

_Sign-up/Login_: The sign-up and login components handle the input of the users. 

_EventCreator_: The EventCreator component is responsible for creating events and sending data to the post endpoint. 

_EventList_: Lastly, the EventList component is responsible for fetching, as well as searching for, data to display.
