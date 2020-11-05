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
    window.Books = main;

    Handlebars.registerHelper("compareEquality", function (a, b, this) {
        console.log(this)
        // if (a == b) {
        //     // let bookObject = main.books.forEach((item) => item.title);
        //     return a;
        // }
    });

});