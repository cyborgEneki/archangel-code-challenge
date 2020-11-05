$(function () {
    var main = {};

    function Book(title, author, category) {
        this.title = title;
        this.author = author;
        this.category = category;
        return this;
    };

    main.initializeBooks = function () {
        let books = [
            new Book('Harry Potter', 'J.K. Rowling', 'Children'),
            new Book('Gone Girl', 'Random Lady', 'Young Adult'),
            new Book('Charlie and the Chocolate Factory', 'Random Dude', 'Children')
        ];

        return books;
    };

    main.books = main.initializeBooks();

    Handlebars.registerHelper("if", function (expression, options) {
        with(this) {
            if (expression.includes("=") || expression.includes("<") || expression.includes(">")) {
                var result = eval(expression)
            }
            else {
                let arrayWithObjectsWhoseKeyMatchesTheExpressionValue = main.books.filter(item => item.category == expression);
                let oneObject = arrayWithObjectsWhoseKeyMatchesTheExpressionValue[0]

                const getKey = (obj, val) => Object.keys(obj).find(key => obj[key] === val);
                let correspondingKey = getKey(oneObject, expression);
                expression = correspondingKey
                var result = eval(expression)
            }
        };

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    window.Books = main;
});