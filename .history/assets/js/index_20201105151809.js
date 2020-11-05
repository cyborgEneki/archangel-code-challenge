$(function () {
    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);

    Handlebars.registerHelper("compareEquality", function (a, b, this) {
        console.log(this)
        // if (a == b) {
        //     // let bookObject = main.books.forEach((item) => item.title);
        //     return a;
        // }
    });
});