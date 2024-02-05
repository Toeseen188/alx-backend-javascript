const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber", function() {
  it("should round up and add two numbers", function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it("should round up and add mixed integer and floating numbers", function(){
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it("should round up, add floating-point numbers", function(){
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it("should round up and two floating-point numbers", function(){
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
