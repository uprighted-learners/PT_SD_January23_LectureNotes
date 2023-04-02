# Character Creator

## Concept

This is an in-class build where we are creating a quick server that covers the CRUD functionality.

# Server Requirements

## JSON Model

```json
{
  "id": 0,
  "name": "String",
  "classType": "String",
  "age": 00,
  "race": "String",
  "npc": false,
  "level": 00
}
```

## Dependencies

- `express`
- `dotenv`

## Endpoints

- base: `localhost:[PORT#]`
- character controller: `/characters`
- route endpoints determined by method and outcome.

## Routes

- GET One by ID
- GET All
- GET All by class
- POST One
- PUT One by ID
- DELETE by ID

---

## Task List

| Status | Task                             | Process                                        |
| ------ | -------------------------------- | ---------------------------------------------- |
| X      | Initialize Project               | `npm init -y`                                  |
| X      | Install Dependencies             | `npm i express` `npm i dotenv`                 |
| X      | Install Dev Dependencies         | `npm install --save-dev nodemon`               |
| X      | Establish Entry Point            | `app.js` or `index.js`                         |
| X      | Create Environmental File        | Create a file called .env                      |
| X      | Create Sample Environmental File | Add our PORT # to it to hide it                |
| X      | Create gitignore file            | Create the .gitignore file                     |
| X      | Set gitignore                    | Add node_modules & .env                        |
| X      | Connect to PORT / Test           | Set up our App.js file                         |
| X      | Create Helpers Folder            |                                                |
| X      | Create db.json file              |                                                |
| X      | Est. first Entry                 | The middle URL that takes us to the controller |
| X      | Create Controller Folder         |                                                |
| X      | Create controller file           | Create a character.controller.js file          |
| X      | Connect Controller               | Properly require in Router and export file     |
| X      | Establish Routes                 | Scope out/make todos for routes                |
| X      | Build GET All                    | (look at routes.controller.js of ToDoLIst)     |
| X      | Test Route                       | POSTMAN!!                                      |
| X      | Build GET One                    |                                                |
| X      | Test Route                       |                                                |
| X      | Build GET All by Class           |                                                |
|        | Consider conditions              | Spelling/capitalization .toLowerCase()         |
|        | Test Route                       |                                                |
|        | Build POST One                   |                                                |
|        | Test Route                       |                                                |
|        | Build PUT One by ID              |                                                |
|        | Test Route                       |                                                |
|        | Build DELETE One by ID           |                                                |
|        | Test Route                       |                                                |

## Stretch Goals

| Stretch Goals                                      | Status            |
| -------------------------------------------------- | ----------------- |
| `POST` - What if a character ID already exists?    | Solution Provide  |
| `PUT` - What if one key is changed in a character? | Solution Provided |

### POST

- Consider how and when do we obtain our DB ids.
- How can we hold on to the current values?
  - Consider reviewing `Math` methods and `spread`.
  - `IF` the established generated ID already exists (`includes`), consider the greatest value and reset the ID based off that.

### PUT

- What key is being passed?
  - Review current values within the DB.
  - Consider how you can cycle through each key and respond depending on what's being passed.
    - If key matches - replace value / if not - keep value.
- What if the there isn't a character to change?
  - How do we handle the `404`

---
