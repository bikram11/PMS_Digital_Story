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


var drawPieChart = function(data, colors) {
    var canvas = document.getElementById('pie');
    var ctx = canvas.getContext('2d');
    var x = canvas.width / 2;
        y = canvas.height / 2;
    var color,
        startAngle,
        endAngle,
        total = getTotal(data);
    
    for(var i=0; i<data.length; i++) {
      color = colors[i];
      startAngle = calculateStart(data, i, total);
      endAngle = calculateEnd(data, i, total);
      
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(x, y);
      ctx.arc(x, y, y-100, startAngle, endAngle);
      ctx.fill();
      ctx.rect(canvas.width - 200, y - i * 30, 12, 12);
      ctx.fill();
      ctx.font = "13px sans-serif";
      ctx.fillText(data[i].label + " - " + data[i].value + " (" + calculatePercent(data[i].value, total) + "%)", canvas.width - 200 + 20, y - i * 30 + 10);
    }
  };
  
  var calculatePercent = function(value, total) {
    
    return (value / total * 100).toFixed(2);
  };
  
  var getTotal = function(data) {
    var sum = 0;
    for(var i=0; i<data.length; i++) {
      sum += data[i].value;
    }
        
    return sum;
  };
  
  var calculateStart = function(data, index, total) {
    if(index === 0) {
      return 0;
    }
    
    return calculateEnd(data, index-1, total);
  };
  
  var calculateEndAngle = function(data, index, total) {
    var angle = data[index].value / total * 360;
    var inc = ( index === 0 ) ? 0 : calculateEndAngle(data, index-1, total);
    
    return ( angle + inc );
  };
  
  var calculateEnd = function(data, index, total) {
    
    return degreeToRadians(calculateEndAngle(data, index, total));
  };
  
  var degreeToRadians = function(angle) {
    return angle * Math.PI / 180
  }
  
  var data = [
    { label: 'Audible/visual/tactile info limited', value: 90 },
    { label: 'Crosswalk time too short', value: 150 },
    { label: 'Crosswalks not marked/missing', value: 80 },
    { label: 'Curb cut/ramp/stair/grade problems', value: 120 },
    { label: 'Difficult to see/be seen', value: 120 },
    { label: 'Don’t know when it’s safe to cross', value: 120 },
    { label: 'Drainage poor', value: 120 },
    { label: 'Drivers don’t stop for me', value: 120 },
    { label: 'Grates and gaps', value: 120 },
    { label: 'Insensitive/unaware drivers', value: 120 },
    { label: 'Insensitive/unaware pedestrians', value: 120 },
    { label: 'Lighting inadequate', value: 120 },
    { label: 'Median/island problems', value: 120 },
    { label: 'Moving traffic too close to me', value: 120 },
    { label: 'Obstacles/protusions/low clearance', value: 120 },
    { label: 'Passing space/width limited', value: 120 },
    { label: 'Surface problems potholes/cracks', value: 120 },
    { label: 'Too few/missing sidewalks/paths', value: 120 },
    { label: 'Other problems', value: 120 },
  ];
  var colors = ['#003f5c', '#39CCCC', '#3D9970', '#001F3F', '#85144B', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600','#003f5c', '#39CCCC', '#3D9970', '#001F3F', '#85144B', '#2f4b7c', '#665191'  ];
  
  drawPieChart(data, colors);