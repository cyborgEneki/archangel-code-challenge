$(function () {
    var main = {};

    function Book(title, author, category) {
        this.title = title;
        this.author = author;
        this.category = category;
        return this;
    };

    main.initializeBooks = function() {
        let books = [
            new Book('Harry Potter', 'J.K. Rowling', 'Children'),
            new Book('Gone Girl', 'Random Lady', 'Young Adult'),
            new Book('Charlie and the Chocolate Factory', 'Random Dude', 'Children')
        ];

        return books;
    };

    main.books = main.initializeBooks();

    Handlebars.registerHelper("compareEquality", function (a, b) {
        if (a == b) {
            return main.books;
        } else {
            return 'Sorry, no children books available.';
        };
    });

    window.Books = main;
});