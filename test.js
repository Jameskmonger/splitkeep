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

test('splits correctly when splitting on new line', function (t, input, output) {
    var result = splitkeep(input, '\n');
    t.assert.equal(result, output);
}, [
    ['a\nb', ['a\n', 'b']],
    ['b\nc', ['b\n', 'c']],
    ['hello-there\nhi\n' ['hello-there\n', 'hi\n']]
]);

test('splits correctly when splitting on ampersand', function (t, input, output) {
    var result = splitkeep(input, '&');
    t.assert.equal(result, output);
}, [
    ['a&b', ['a&', 'b']],
    ['b&c', ['b&', 'c']],
    ['hello-there&hi&' ['hello-there&', 'hi&']]
]);
