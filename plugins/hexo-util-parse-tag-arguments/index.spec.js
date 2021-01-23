require('chai').should();
var parseTagArguments = require('./index.js');

describe('parseTagArguments', function() {
  it('should gnerate a map', function() {

    var result = parseTagArguments({
      sourceArguments: ["value", "param1=value1", "param2=value2"],
      defaultKey: "param",
      defaultArguments: {
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
