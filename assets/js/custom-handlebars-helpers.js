Handlebars.registerHelper("if", function (a, b, c) {
    let result, options;

    if (typeof b === 'string') {
        with(this) {
            expression = a == b;
            result = eval(expression);
            options = c;
        };
    }

    // In the absence of a second argument, the helper object becomes 'b' while 'c' remains undefined
    if (typeof b === 'object') {
        with(this) {
            function getCorrespondingKey(obj, val) {
                return Object.keys(obj).find(key => obj[key] === val);
            }
            let correspondingKey = getCorrespondingKey(this, a);
            result = correspondingKey;
            options = b;
        }
    }

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
