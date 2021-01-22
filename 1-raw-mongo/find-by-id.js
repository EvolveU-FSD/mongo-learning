const { ObjectId } = require('mongodb');
const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        _id: ObjectId("600b07955c49ec3ea29b11ea")
    })
    .then((result) => {
        console.log(result)
    })    
})
.then(() => {
    db.close()
})