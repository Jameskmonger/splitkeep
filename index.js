(function(mod) {

    mod.exports = function (input, delimiter) {
        var split = input.split(delimiter);

        for (var i = 0; i < split.length - 1; i++) {
            split[i] += delimiter;
        }

        return split;
    };

})(module);
