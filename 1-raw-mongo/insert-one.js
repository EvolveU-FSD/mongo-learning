const db = require('./db');

db.getCollection('people').then((people) => {
    return people.insertOne({
        firstName: 'Anthony',
        lastName: 'Enerson'
    })
})
.then(() => 
    db.close()
)
