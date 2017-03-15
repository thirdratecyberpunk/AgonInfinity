// class representing a 'node' point
function Node(endPointX, endPointY){
  this.endPointX = endPointX;
  this.endPointY = endPointY;
  this.getNodeX= function(){
    return this.endPointX;
  }
  this.getNodeY= function(){
    return this.endPointY;
  }
}

// method responsible for rendering the album art itself
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
    var nodes = [];
    var nodeLocation = [];
    // defines colours for fill style
    ctx.fillStyle = 'rgb(365, 0, 0)';
    // renders nodes nodeNums times
    for (i = 0; i < nodeNums; i++){
      ctx.beginPath();
      endAngle = startAngle + radians;
      // creates the arc used to define the centre of the node
      ctx.arc(250, 250, 125, startAngle, endAngle);
      ctx.stroke();
      // gets the end of the arc
      nodeLocation = getPoint(250, 250, 125, endAngle);
      node = new Node(nodeLocation[0], nodeLocation[1]);
      nodes.push(node);
      // creates a circle centred at the end of the arc
      ctx.arc(node.getNodeX(),node.getNodeY(),5,0,2*Math.PI);
      ctx.stroke();
      startAngle = endAngle;
    }
    // draws lines from every node to every other node
    for (i = 0; i < nodes.length; i++){
      ctx.moveTo(nodes[i].getNodeX(), nodes[i].getNodeY());
      console.log("At node " + i)
      for (x = i + 1; x < nodes.length; x++){
        // if it hasn't reached the last node in the array, draw to the next node
        console.log("Drawing to node  " + x);
        if (x + 1 != nodes.length){
          ctx.lineTo(nodes[x + 1].getNodeX(), nodes[x + 1].getNodeY());
        }
        // if it has reached the last node, loop back around
        else{
          ctx.lineTo(nodes[0].getNodeX(), nodes[0].getNodeY());
        }
        ctx.stroke();
      }
    }
  }
}

// determines the end point of an arc given an arc's centre, radius and end angle
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
