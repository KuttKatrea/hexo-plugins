require('chai').should();
var parseTagArguments = require('./index.js');

describe('parseTagArguments', function() {
  it('should gnerate a map', function() {

    var result = parseTagArguments({
      arguments: ["value", "param1=value1", "param2=value2"],
      defaultKey: "param",
      defaults: {
        "param3": "value3"
      }
    })

    result.should.include({
      param: "value",
      param1: "value1",
      param2: "value2",
      param3: "value3",
    });
  });
});
