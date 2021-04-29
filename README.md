# Party List

## Overview
This app contains information about any party providers that people need to plan their events and parties. You can choose from different categories such as bakery, baloon decorations, party characters and etc

## Wireframes

<img src=./assets/welcomepage.png  width="220" height="140">
<img src=./assets/signup.png  width="220" height="140"><img src=./assets/login.png  width="220" height="140"><img src=./assets/alllistings.png  width="220" height="140"><img src=./assets/singlelisting.png  width="220" height="140"><img src=./assets/editdelete.png  width="220" height="140">

## User stories

1. When page loads, I see Home page.
2. When I'm in Home page, i see links for Signup and Login.
3. I can create a new profile, or login to an existing profile.
4. If I create a new profile, i need to fill out name, email and password.
5. For an existing profile, i fill out email and password and click Log in.
6. When I successfully logged in as a user, I can choose a category i need and see the list of service providers.
7. User can also create a listing.
8. When i click on a listing, I can see image, description, city, and contact information.
9. As a listing owner, i can edit and delete post.

## Routes inventory

|Method|Path|Description|
|---|---|---|
|POST|/user/signup|create new user|
|POST|/user/login|user login|
|GET|/user/verify|user verify|
|GET|/listing/all|see all listings|
|GET|/listing/my|see my listings|
|GET|/listing/:id|see single listing|
|POST|/listing/create|create new listing|
|DELETE|/listing/:id|delete single listing|
|POST|/listing/:id/review|see single listing reviews|

## Database ERD

![erb](assets/erb.png)

## MVP checklist

* create database
* create models
* make associations for models
* create routes and controllers
* sign up form
* login form
* Home page 
* List of service providers
* Create, edit and delete listing

## Stretch goals

* Search by zip code
* Categories
* Reviews
