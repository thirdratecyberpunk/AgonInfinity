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
      // gets the position of the node based on a hypothetical circle
      nodeLocation = getPoint(250, 250, 200, endAngle);
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
      console.log("Current node: X position " +  nodes[i].getNodeX()+ " Y position " + nodes[i].getNodeY());
      for (x = i + 1; x <= nodes.length; x++){
        // if it hasn't reached the last node in the array, draw to the next node
        if (x < nodes.length){
          console.log("Drawing to X position " +  nodes[x].getNodeX()+ " Y position " + nodes[x].getNodeY());
          //console.log("Not the last node");
          ctx.lineTo(nodes[x].getNodeX(), nodes[x].getNodeY());
        }
        // if it has reached the last node, loop back around
        else{
          console.log("Reached the last node");
          ctx.lineTo(nodes[0].getNodeX(), nodes[0].getNodeY());
        }
        ctx.moveTo(nodes[i].getNodeX(), nodes[i].getNodeY());
      }
    }
    ctx.stroke();
  }
}

// determines the end point of an arc given an arc's centre, radius and end angle
function getPoint(c1,c2,radius,angle){
    return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
