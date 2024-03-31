const mongoose = require('mongoose');

const db_url = 'mongodb+srv://subhash:Mongodb_hmc@123@todos.mjweukx.mongodb.net/?retryWrites=true&w=majority&appName=todos';
mongoose.connect("mongodb+srv://subhash:Mongodb_hmc%40123@todos.mjweukx.mongodb.net/cohort"); // connect to database

// Get the default connection
const db = mongoose.connection;

// Event listeners for Mongoose connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
  // You can start performing database operations here
});

const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

// model represent collection which is similar to table of Mysql
// a record of table in mysql is analogous to a document of collection in mongodb

const todo = mongoose.model('list/todo-list', todoSchema)

module.exports = {
    todo
}
