const db = require('./db');

let getPeople = db.getCollection('people')
let getNotifications = db.getCollection('notifications')

Promise.all([getPeople, getNotifications]).then(([people, notifications]) => {
    return people.findOne({
        firstName: 'Anthony'
    })
    .then((result) => {
        return result._id    
    })
    .then((gregsId) => {
        return notifications.insertOne({ 
            forUser: gregsId, 
            message: "Hi tony, this is not for greg", 
            timestamp: new Date(), 
            read: false
        })
    })

})
.then(() => {
    db.close()
})