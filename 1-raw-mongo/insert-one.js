const db = require('./db');

db.getCollection('people').then((people) => {
    console.log('Inserting a document!')
    return people.insertOne({
        firstName: 'Anthony',
        lastName: 'Enerson'
    })
})
.then((insertResult) => {
    console.log("Document has been inserted")
    console.log(insertResult)
    db.close()
})
