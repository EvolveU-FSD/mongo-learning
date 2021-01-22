const db = require('./db');

db.getCollection('people').then((people) => {
    let findCursor = people.find({
        firstName: { $in: [ "Greg", "Al"] }
    })
    return findCursor.toArray()
        .then((results) => {
            console.log("Found: " + results.length + " documents!")
            console.log(results)
        })
})
.then(() => {
    db.close()
})