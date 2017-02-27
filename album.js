// responsible for rendering the album art itself
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // number of nodes to create lines to and from
    // 9 used as default parameter because Nonagon
    var nodeNums = 9;

    // need to calculate the specific location of each node
    // howevermanyradiansinacircle/nodeNums should provide a number of radians to put nodes at
    var radians = 6.283/nodeNums;
    var startAngle = 0;
    var endAngle = 0;
    var nodeLocation = [];
    // renders a node nodeNums times
    for (i = 0; i < nodeNums; i++){
      // defines colours for fill style
      ctx.fillStyle = 'rgb(365, 0, 0)';
      ctx.beginPath();
      endAngle = startAngle + radians;
      console.log(endAngle);
      ctx.arc(250, 250, 125, startAngle, endAngle);
      ctx.stroke();
      nodeLocation = getPoint(250, 250, 125, endAngle);
      console.log(nodeLocation);
      // creates a square with co-ordinates of the given points
      ctx.fillRect(nodeLocation[0], nodeLocation[1], 10, 10);
      startAngle = endAngle;
    }
  }
}

// determines the end point of an arc given an arc's centre, radius and end angle
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
