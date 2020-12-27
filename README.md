# Pencil Backend
Pencil Backend is a Node API that uses MongoDB with Mongoose to store questions and their tags, allowing users to search and retrive questions based on tags from a topic tree.

## Requirements
- Node
- Mongo and mongodb
- Yarn/npm

## Setup
- Clone this Repo
- Install requirements using yarn install
- Setup the .env file from the .env.sample file
- Start mongodb using `mongod`
- Start the server using `yarn dev:start`
- Seed question and topics using the POST requests to `/api/v1/questions` and `/api/v1/topics`
(Data is seeded automatically on database set up if collections are empty)

## Endpoints available
| Endpoints                 | Method  | Description                                         |
|---------------------------|---------|-----------------------------------------------------|
|  /questions               | POST    | add all questions to database from JSON file        |
|  /questions               | GET     | fetch all questions from database                   | 
|  /topics                  | POST    | add all topics to database from JSON file           |
|  /topics                  | GET     | fetch all topics from database                      |
|  /search?q=query          | GET     | returns an array questions with the annotation query|

## Hosting
### Database
The database is hosted on [Mongo Atlas](https://cloud.mongodb.com/)

### App
The app is hosted on Heroku
Access the API via https://pencil-backend-shalon.herokuapp.com/api/v1
