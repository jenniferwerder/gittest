let should = require ('should');
let request = require('request');
let expect = require ('chai').expect;
let unitTestingURL = 'http://localhost:5000/users';
//let util = require ('util');

describe ('return Amelia', function() {
    it ('return Amelia',  function(done){
        //picking ip
        request.get({url: unitTestingURL + '/users/amedlia.hansson@gmail.com'},
        function(error, response, body){
            var bodyObj = JSON.parse(body);
            //want to get a 200 response
            expect(bodyObj[0].firstName).to.equal('Amelia');
            console.log(bodyObj);
            done();
        });
    });
});