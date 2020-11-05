$(function () {
    Handlebars.registerHelper("compareEquality", function (a, b, c) {
        if (a == b) {
            cp
            return c;
        }
    });

    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
});