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

$('[data-ii]').on('click', function (e) {
    var check = e.currentTarget.getAttribute('data-ii');
    if(check!='33892'){
    var $page = $('#page-5'),
        blockToShow = e.currentTarget.getAttribute('data-ii'),
        $page_image = $('#page-5_image');

    // Hide all children.
    $page.children().hide();
    $page_image.children().hide();
    // And show the requested component.
    $page.children(blockToShow).show();
    $page_image.children(blockToShow+"_image").show();
    }
});

Highcharts.chart('container', {

    title: {
      text: 'Highcharts pie chart'
    },
  
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
  
    series: [{
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['Audible/visual/tactile info limited', 29.9, false],
        ['Crosswalk time too short', 71.5, false],
        ['Crosswalks not marked/missing', 106.4, false],
        ['Curb cut/ramp/stair/grade problems', 129.2, false],
        ['Difficult to see/be seen', 144.0, false],
        ['Don’t know when it’s safe to cross', 176.0, false],
        ['Drainage poor', 135.6, false],
        ['Drivers don’t stop for me', 148.5, false],
        ['Grates and gaps', 71.5, false],
        ['Insensitive/unaware drivers', 106.4, false],
        ['Insensitive/unaware pedestrians', 129.2, false],
        ['Lighting inadequate', 144.0, false],
        ['Median/island problems', 176.0, false],
        ['Moving traffic too close to me', 135.6, false],
        ['Obstacles/protusions/low clearance', 148.5, false],
        ['Passing space/width limited', 71.5, false],
        ['Surface problems potholes/cracks', 106.4, true, true],
        ['oo few/missing sidewalks/paths', 129.2, true, true],
        ['Other problems', 144.0, false],
      ],
      showInLegend: true
    }]
  });
  