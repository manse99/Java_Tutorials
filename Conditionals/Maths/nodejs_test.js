var answers = [1, 2, 3, 4, 5, 6];
_.each([1, 2, 3], function(num) { answers.push(num * this.multiplier); }, { multiplier: 5 });
assert.deepEqual(answers, [5, 10, 15], 'context object property accessed');

console.log(answers);