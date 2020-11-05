$(function () {
    Handlebars.registerHelper("returnChildrenBooks", function (a, b, c) {
        if (a == b) {
            return `
                <div class="card">
                    <div class="card__container">
                        <div class="card__heading"><b>${c.title}</b></div>
                        <p class="card__title-text">${c.author}</p>
                        <p class="card__category-text">Category: <i>${c.category}</i></p>
                    </div>
                </div>
            `
        }
    });

    let template = $('#template-script').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ books: Books.books });
    $('#main').html(rendered);
});