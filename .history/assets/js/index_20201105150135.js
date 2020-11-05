$(function () {
    Handlebars.registerHelper("compareEquality", function (a, b) {
        console.log(a)
        if (a == b) {
            return real;
        } else {
            return makeBelieve;
        };
    });
    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
});