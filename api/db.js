const db = require('mongoose');

const user = 'Somilka';
const pwd = 'mongorwh';
const dbName = 'shop';
const path = `mongodb+srv://${user}:${pwd}@study.313c3.mongodb.net/${dbName}?retryWrites=true&w=majority`;

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;