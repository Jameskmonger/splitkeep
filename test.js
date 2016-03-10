var test = require('modunit');
var splitkeep = require('./index.js')

test('splits correctly when splitting on dot', function (t, input, output) {
    var result = splitkeep(input, '.');
    t.assert.equal(result, output);
}, [
    ['a.b', ['a.', 'b']],
    ['b.c', ['b.', 'c']],
    ['hello-there.hi.' ['hello-there.', 'hi.']]
]);
