var Datastore = require ('nedb')
, db = new Datastore ({ filename: 'hejhej.db', autoload: true});

var doc = { 
animal: 'panda',
color: 'blue'

               };

db.insert(doc, function (err, newDoc) {

});

// curly bracket inside = 
db.find({_id:'YomiJqyPOBiFE5E1'}, function (err, docs) {
    console.log(docs)
})


db.remove({_id:'YomiJqyPOBiFE5E1'}, {}, function (err, numRemoved) {

});


//using the remove and then insert again, how i would do it --> update (but doesn't work)