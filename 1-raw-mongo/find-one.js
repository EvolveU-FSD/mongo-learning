const db = require('./db');

db.getCollection('people').then((people) => {
    return people.findOne({
        firstName: 'Anthony'
    })
    .then((result) => {
        console.log(result)
    })
})
.then(() => {
    db.close()
})