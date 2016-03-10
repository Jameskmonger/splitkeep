var test = require('modunit');
var splitkeep = require('./index.js')

test('splits correctly when splitting on dot', function (t, input, output) {
    var result = splitkeep(input, '.');
    t.assert.equal(output.toString(), result.toString());
}, [
    ['a.b', ['a.', 'b']],
    ['b.c', ['b.', 'c']],
    ['hello-there.hi.', ['hello-there.', 'hi.', '']]
]);

test('splits correctly when splitting on new line', function (t, input, output) {
    var result = splitkeep(input, '\\n');
    t.assert.equal(output.toString(), result.toString());
}, [
    ['a\\nb', ['a\\n', 'b']],
    ['b\\nc', ['b\\n', 'c']],
    ['hello-there\\nhi\\n', ['hello-there\\n', 'hi\\n', '']]
]);

test('splits correctly when splitting on ampersand', function (t, input, output) {
    var result = splitkeep(input, '&');
    t.assert.equal(output.toString(), result.toString());
}, [
    ['a&b', ['a&', 'b']],
    ['b&c', ['b&', 'c']],
    ['hello-there&hi&', ['hello-there&', 'hi&', '']]
]);

test('splits correctly when filled with delimiter', function (t, delimiter, input, expected) {
    var result = splitkeep(input, delimiter);
    t.assert.equal(expected.toString(), result.toString());
}, [
    ['.', '....', ['.','.','.','.','']],
    ['a', 'aaaa', ['a','a','a','a','']],
    ['Zx', 'ZxZxZxZx', ['Zx', 'Zx', 'Zx', 'Zx', '']]
]);
