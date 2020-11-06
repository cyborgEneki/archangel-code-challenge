$(function () {
    let main = {};

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

    Handlebars.registerHelper("if", function (a, b, options) {
        let result;

        if (typeof b === 'string') {
            with(this) {
                expression = a == b
                result = eval(expression)
            };

            if (result) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        }

        // In the absence of a second argument, the helper object becomes 'b' while 'options' remains undefined
        if (typeof b === 'object') {
            with(this) {
                let arrayWithObjectsWhoseKeyMatchesTheExpressionValue = main.books.filter(
                    book => Object.values(book).some(function (key) {
                        return key === a;
                    }));
                let oneObject = arrayWithObjectsWhoseKeyMatchesTheExpressionValue[0]

                const getKey = (obj, val) => Object.keys(obj).find(key => obj[key] === val);
                let correspondingKey = getKey(oneObject, a);
                result = correspondingKey
            }

            if (result) {
                return b.fn(this);
            } else {
                return b.inverse(this);
            }
        }
    });

    window.Books = main;
});