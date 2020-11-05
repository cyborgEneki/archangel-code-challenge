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
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
    console.log(books)
});