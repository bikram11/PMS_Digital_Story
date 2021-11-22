 window.ws = new WebSlides();

// Listening to a button click.
$('[data-switch]').on('click', function (e) {
    var $page = $('#page-4'),
        blockToShow = e.currentTarget.getAttribute('data-switch'),
        $page_image = $('#page-4_image'),
        $page_button = $('#page-4_buttons');

    // Hide all children.
    $page.children().hide();
    $page_image.children().hide();
    $page_button.children().hide();
    // And show the requested component.
    $page.children(blockToShow).show();
    $page_image.children(blockToShow+"_image").show();
    $page_button.children(blockToShow+"_buttons").show();
});

$('.prob-class').on('click', function (e) {
    
    var $page2 = $('#page-5'),
        blockToShow = e.currentTarget.getAttribute('data-switch'),
        $page_image2 = $('#page-5_image');
    
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    // Hide all children.
    $page2.children().hide();
    $page_image2.children().hide();
    // And show the requested component.
    $page2.children(blockToShow).show();
    $page_image2.children(blockToShow+"_image").show();
});