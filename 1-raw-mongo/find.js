const db = require('./db');

db.getCollection('people').then((people) => {
    return people.find({
        firstName: 'Anthony'
    })
    .then((findCursor) => {
        return findCursor.toArray()
    })
    .then((results) => {
        console.log(results)
    })
})
.then(() => {
    db.close()
})