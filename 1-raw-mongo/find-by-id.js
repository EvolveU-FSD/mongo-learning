const { ObjectId } = require('mongodb');
const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        _id: ObjectId("6007bcc59dd95e7d46991666")
    })
    .then((result) => {
        console.log(result)
    })    
})
.then(() => {
    db.close()
})