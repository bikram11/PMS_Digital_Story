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
      text: 'Surface Problems on sidewalks like potholes, cracks; and problems like short sidewalks or missing sidewalks amount to more than 40% of the problems faced by people with mobility impairments'
    },
  
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
  
    series: [{
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['Audible/visual/tactile info limited', 3.71, false],
        ['Crosswalk time too short', 11.31, false],
        ['Crosswalks not marked/missing', 11.22, false],
        ['Curb cut/ramp/stair/grade problems', 7.48, false],
        ['Difficult to see/be seen', 3.08, false],
        ['Don’t know when it’s safe to cross', 10.94, false],
        ['Drainage poor', 3.11, false],
        ['Drivers don’t stop for me', 16.44, false],
        ['Grates and gaps', 1.08, false],
        ['Insensitive/unaware drivers', 24.34, false],
        ['Insensitive/unaware pedestrians', 1.86, false],
        ['Lighting inadequate', 3.76, false],
        ['Median/island problems', 0.91, false],
        ['Moving traffic too close to me', 3.73, false],
        ['Obstacles/protusions/low clearance', 5.5, false],
        ['Passing space/width limited', 3.13, false],
        ['Surface problems potholes/cracks', 21.43, true, true],
        ['Too few/missing sidewalks/paths', 19.05, true, true],
        ['Other problems', 4.93, false],
      ],
      showInLegend: true
    }]
  });
  