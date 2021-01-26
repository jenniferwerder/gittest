//1. insert
//2. delete 
//3. update user 
var Datastore = require ('nedb')
, db = new Datastore ({ filename: '../Storage/UserInformation.db', autoload: true});


function insertNewUser (userInformation){
    db.insert(userInformation, function (err, newUserInformation) {


    });

}
function removeNewUser (userId){
db.remove({id:userId}, {}, function (err, numRemoved) {

});
}

function updateNewUser (newInformation){
    // "I want that precise key (or value)"
    let userId = newInformation.id
    db.remove({id:userId}, {}, function (err, numRemoved) {
    
    });
    db.insert(newInformation, function (err, newUserInformation) {


    });
    }

module.exports = {
    insertNewUser,
    removeNewUser,
    updateNewUser

}