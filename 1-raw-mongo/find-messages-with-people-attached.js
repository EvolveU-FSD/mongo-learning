const db = require('./db');

let getPeople = db.getCollection('people')
let getNotifications = db.getCollection('notifications')

Promise.all([getPeople, getNotifications]).then(([people, notifications]) => {
    let cursor = notifications.aggregate([{
        "$lookup" : {
            "localField" : "forUser", 
            "from" : "people",
            "foreignField" : "_id",
            "as" : "person"
        }
    }])

    return cursor.toArray()
        .then((results) => {
            console.log("Here are all of the messages, with the people attached")
            console.log(results[0])
        })

})
.then(() => {
    db.close()
})