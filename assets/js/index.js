$(function () {
    Handlebars.registerHelper("if", function (expression, options) {
        with(this) {
            var result = eval(expression)
        };

        if (result) {
            return options.fn(this);
        }
    });

    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
});