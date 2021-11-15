 window.ws = new WebSlides();

// Listening to a button click.
$('[data-switch]').on('click', function (e) {
    var $page = $('#page-4'),
        blockToShow = e.currentTarget.getAttribute('data-switch'),
        $page_image = $('#page-4_image');

    // Hide all children.
    $page.children().hide();
    $page_image.children().hide();
    // And show the requested component.
    $page.children(blockToShow).show();
    $page_image.children(blockToShow+"_image").show();
});