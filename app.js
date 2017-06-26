
// var path = new Path.Circle({
//     center: view.center,
//     radius: 25,
//     fillColor: 'black'
// });
//
// var shiftPath = function onFrame(event) {
//     console.log(event.count);
//
//     path.position += new Point(-.5,.5);
// };

 // path.on('mouseenter', function(){view.on('frame', shiftPath)});
 // path.on('mouseleave', function(){view.off('frame', shiftPath)});



// The amount of circles we want to make:
var count = 250;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	fillColor: 'white',
	strokeColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

// The onFrame function is cadlled up to 60 times a second:
function onFrame() {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
    //console.log(i);
    var change = 1;
    if(i % 10){
      change = 2;
    }else{
      change = 1;
    }
		thingDo(item,change)
	}
}

function onMouseDown() {
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;
  console.dir(event.clientX);
  path.position = new Point(x,y);
  path.fillColor = getRandomColor();
  path.strokeColor = getRandomColor();

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function thingDo(item,change){
  if(change === 2){
    item.position.y += item.bounds.width /20;
    if (item.bounds.left > view.size.width) {
      item.bounds.x = -item.bounds.width;
    }
  }else{
    item.position.x += item.bounds.width /20;
    if (item.bounds.left > view.size.width) {
      item.bounds.x = -item.bounds.width;
    }
  }
}

function onMouseDrag(){
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;
//  console.log(x,y);
  path.position = new Point(x,y);
  console.log(path.position,x,y)
}
