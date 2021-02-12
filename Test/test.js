let request = require('request');
let expect = require ('chai').expect;
let unitTestingURL = 'http://localhost:5000';


describe ('return Luis', function() {
    it ('return Luis',  function(done){
        //picks it up
        request.get({url: unitTestingURL + '/users/luis.farrington@gmail.com'},
        function(error, response, body){
            var bodyObj = JSON.parse(body);
            console.log(body)
            //want to get a 200 response
            expect(bodyObj[0].firstName).to.equal('Luis');
            //console.log(bodyObj);
            done();
        });
    });
});