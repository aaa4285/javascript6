$(document).ready(function() {
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	'use strict';
	
	var tool = new Tool();
	
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	};
	
	paper.view.draw();
});