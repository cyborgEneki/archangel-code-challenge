$(function () { 
    function renderChildrenBooks () {
        let template = $('#template-script').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({
                books: Books.books
            });
        $('#main').html(rendered);
    }

    renderChildrenBooks();
});