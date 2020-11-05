$(function () {
    Handlebars.registerHelper("compareEquality", function (a, b) {
        if (a == b) {
            return 'test';
        } else {
            return 'Sorry. No children books available.';
        };
    });
    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);

    
});