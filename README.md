# CRUD-backend

## Created Using Node.js, Express(Node Web Framework), Mongoose(MongoDB ODM)

- An organised CRUD Backend built to learn fundamental operations on Database using Node. 

All folders are organised professionally.

`app.js` contains the express app created using `const app = express()` and the routing middleware.

`server.js` is the express server created on `app.js`.

`models` folder contains `userModel.js` that contains `schema` and database model` created using `Mongoose`.

`controllers` folder contains all the business logic, mainly the routing functions creating and interacting with db model made in `model` folder.

`routes` folder contains all the router methods used from the routing functions of the `controllers`

`config` contains `db.js` file that has database connection function that is passed to the `app.js`.
