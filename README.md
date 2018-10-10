## iLearn
Want to learn Spanish? Taking advantage of spaced repetition, a user will continue to see the same questions spaced according to their correct or incorrect responses. This creates an efficient method of learning new words quickly. This application allows users to track their progress and master Spanish vocabulary. 

## Description

This is a simple app that uses spaced repetition to improve learning. Users can create their own accounts and begin tracking their progress. As of now, there are only ten vocabulary words that users will continue to see as they progress through their learning. Eventually, more words will be added, with a feature that will allow users to input new words of their choosing. Other languages are soon to be implemented as well.

## Link to Application

I used heroku to deploy this application: https://jon-filipp-spcrep-client.herokuapp.com/

The backend can be found here: https://github.com/thinkful-ei22/jon-filipp-spaced-repetition-server

### A dummy user has been set-up:
    Username: test 
    Password: password

##  Screenshots
### *The landing page, where users can login or register for a new account.

<img width="1440" alt="screen shot 2018-09-14 at 1 05 18 pm" src="https://user-images.githubusercontent.com/38267761/45572909-9e0dc680-b81f-11e8-81c9-281a756d1aac.png">



### *The main page where users will answer questions:
<img width="1440" alt="screen shot 2018-09-14 at 1 05 44 pm" src="https://user-images.githubusercontent.com/38267761/45572810-48391e80-b81f-11e8-99a5-847c6eafbc0d.png">


## Tech Stack

This app was created using React for the front-end, and Node for the back-end.

*Front-end*: 
CSS, React, Redux, JWT-Decode


*Back-end*:
Express, Node, Passport, Dotenv, BcryptJs

## Key Parts

This app has a few key components, but the main ones are the **Landing Page** and **Guess Form** components.

All of the components live in the src/components/<name of component> directory.

_Landing Page_: The job of the landing page component is to handle the the registration and login for new and returning users. As the first page that users see, it it straighforward and uncomplicated. 

_Guess Form_: The guess form component handles all the main functionality of this web application. It is responsible for keeping track of the streak and count and storing it in the local state. This component is also where the API calls are dispatched, grabbing the questions and submitting user responses. More features will soon be added.
