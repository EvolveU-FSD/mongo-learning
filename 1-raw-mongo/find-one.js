const db = require('./db');

db.getCollection('people').then((people) => {
    console.log('Looking for "firstName" of "Anthony"')
    return people.findOne({
        firstName: 'Anthony'
    })
    .then((result) => {
        console.log("Found:")
        console.log(result)
    })
})
.then(() => {
    db.close()
})