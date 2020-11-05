$(function () {
    renderAllBooks();
    renderFilteredBooks();

    function renderAllBooks() {
        let template = $('#template-script').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({
                books: Books.books
            });
        $('#main').html(rendered);
    }

    function renderFilteredBooks() {
        let template = $('#template-script').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({
                books: Books.books
            });
        $('#main').html(rendered);
    }
});