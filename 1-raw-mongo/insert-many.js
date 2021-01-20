const db = require('./db');

db.getCollection('people').then((people) => {
    return people.insertMany([
        {
            firstName: 'Greg',
            lastName: 'Fenton'
        },
        {
            firstName: 'Al',
            lastName: 'Del Degan'
        },
    ])
})
.then(() => 
    db.close()
)
