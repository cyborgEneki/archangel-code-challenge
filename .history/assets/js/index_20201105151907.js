$(function () {
    Handlebars.registerHelper("compareEquality", function (a, b, c) {
        console.log(c)
        if (a == b) {
        //     // let bookObject = main.books.forEach((item) => item.title);
        //     return c;
        }
    });

    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
});