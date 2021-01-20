const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        firstName: 'Anthony'
    })
    .then((result) => {
        return result._id    
    })
    .then((id) => {
        return people.updateOne({_id: id}, { $set: {age: 39 }})
    })
})
.then(() => {
    db.close()
})