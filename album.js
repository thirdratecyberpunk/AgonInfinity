// responsible for rendering the album art itself
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // number of nodes to create lines to and from
    // 9 used as default parameter because Nonagon
    var nodeNums = 9;

    // calculates the radians for the arc to populate the circle with
    var radians = 6.283/nodeNums;
    var startAngle = 0;
    var endAngle = 0;
    var nodeLocation = [];
    // defines colours for fill style
    ctx.fillStyle = 'rgb(365, 0, 0)';
    // renders a node nodeNums times
    for (i = 0; i < nodeNums; i++){
      ctx.beginPath();
      endAngle = startAngle + radians;
      console.log(endAngle);
      // creates the arc used to define the centre of the node
      ctx.arc(250, 250, 125, startAngle, endAngle);
      ctx.stroke();
      // gets the end of the arc
      nodeLocation = getPoint(250, 250, 125, endAngle);
      // creates a circle centred at the end of the arc
      ctx.arc(nodeLocation[0],nodeLocation[1],10,0,2*Math.PI);
      ctx.fill();
      startAngle = endAngle;
    }
  }
}

// determines the end point of an arc given an arc's centre, radius and end angle
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
