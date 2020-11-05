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


    Handlebars.registerHelper("compareEquality", function (a, b, c) {
        if (a == b) {
            console.log(c.title)
            return `
            <div class="card">
                    <div class="card__container">
                        <div class="card__heading"><b>${c.title}</b></div>
                        <p class="card__title-text">{{author}}</p>
                        <p class="card__category-text">Category: <i>{{category}}</i></p>
                    </div>
                </div>` 
        }
    });

    window.Books = main;
});