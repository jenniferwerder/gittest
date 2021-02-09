var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/SaveMatches.db', autoload: true});


function insertNewMatch (TwoMatchesEmail){
    db.insert(TwoMatchesEmail, function (err, TwoMatchesEmail) {


    });

}
function removeNewMatch (userEmail){
db.remove({email1:userEmail}, {}, function (err, numRemoved) {

});
}


module.exports = {
    insertNewMatch,
    removeNewMatch

}

/*{
    //keys
    email1,
    email2
}*/