const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        firstName: 'Greg'
    })
    .then((result) => {
        return result._id    
    })
    .then((id) => {
        return people.updateOne({_id: id}, { $set: {age: 12 }})
    })
})
.then(() => {
    db.close()
})