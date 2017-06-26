tool.minDistance = 10;
tool.maxDistance = 45;

var path;

function onMouseDown(event) {
	path = new Path();
	path.fillColor = {
		hue: Math.random() * 360,
		saturation: 1,
		brightness: 1
	};

	path.add(event.point);
}

function onMouseDrag(event) {
	var step = event.delta;

  console.log(event.middlePoint)

	var top = event.middlePoint;
	var bottom = event.middlePoint;

	path.add(top);
	path.insert(0, bottom);
	path.smooth();
}

function onMouseUp(event) {
	path.add(event.point);
	path.closed = true;
	path.smooth();
}



// var values = {
//            points: 20,
//            radius: 20,
//            initialRadius: 10
//        };
//        for (var i = 0; i < 30; i++) {
//            var path = new Path({
//                fillColor: i % 2 ? 'red' : 'black',
//                closed: true
//            });
//
//            var point = new Point({
//                length: values.initialRadius + values.radius * i,
//                angle: 0
//            });
//            for (var j = 0; j <= values.points; j++) {
//                point.angle += 360 / values.points;
//                if (j == 0) {
//                    path.add(view.center + point);
//                } else {
//                    path.arcTo(view.center + point);
//                }
//            }
//            project.activeLayer.insertChild(0, path);
//        }
