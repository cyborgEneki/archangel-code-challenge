$(function () {
    var main = {};

    function Book(title, author, category) {
        this.title = title;
        this.author = author;
        this.category = category;
        return this;
    }

    main.books = () => {
        let books = [
            new Book('Harry Potter', 'J.K. Rowling', 'Children'),
            new Book('Harry Potter', 'J.K. Rowling', 'Children'),
            new Book('Harry Potter', 'J.K. Rowling', 'Children')
        ]
    }
});