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

## Queries
To query the database make a get request to the route `https://pencil-backend-shalon.herokuapp.com/api/v1/search?q=<query>`
E.g.
`https://pencil-backend-shalon.herokuapp.com/api/v1/search?q=Cell Structure and Organisation`
should return
```
{
    "questions": [
        15,
        48,
        87,
        190,
        7,
        66,
        164,
        176,
        8,
        21,
        76,
        83,
        142,
        188,
        118,
        184,
        19,
        23,
        50,
        64,
        115,
        163,
        41,
        45,
        100,
        11,
        59,
        96,
        121,
        94,
        3,
        82,
        156,
        105,
        132,
        139,
        117,
        171,
        196,
        56,
        147
    ]
}
```

`https://pencil-backend-shalon.herokuapp.com/api/v1/search?q=Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels`
returns
```
{
    "questions": [
        2,
        57,
        144,
        181
    ]
}
```

