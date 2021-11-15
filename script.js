 window.ws = new WebSlides();

// Listening to a button click.
$('[data-switch]').on('click', function (e) {
    var $page = $('#page-4'),
        blockToShow = e.currentTarget.getAttribute('data-switch');

    // Hide all children.
    $page.children().hide();

    // And show the requested component.
    $page.children(blockToShow).show();
});