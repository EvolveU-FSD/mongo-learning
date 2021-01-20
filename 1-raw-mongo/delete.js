const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        firstName: 'Anthony'
    })
    .then((result) => {
        return result._id    
    })
    .then((id) => {
        console.log('deleting document id', id)
        return people.deleteOne({_id: id})
    })
})
.then(() => {
    db.close()
})