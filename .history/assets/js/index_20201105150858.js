$(function () {
    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);

    Handlebars.registerHelper("compareEquality", function (a, b) {
        if (a == b) {
            return template;
        } else {
            return 'Sorry. No children books available.';
        };
    });
});