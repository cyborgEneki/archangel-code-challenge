$(function () {
    Handlebars.registerHelper("compareEquality", function (a, b, real, makeBelieve) {
        if (a == b) {
            return real;
        } else {
            return makeBelieve;
        };
    });
    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books,
            b: 1,
            real: 'an oblate spheroid',
            makeBelieve: 'flat'
        });
    $('#main').html(rendered);
});