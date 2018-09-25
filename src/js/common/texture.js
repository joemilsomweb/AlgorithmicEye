const paper = require("paper");
import * as Three from "three";

class Texture{

	constructor(geometry){
		this.geometry = geometry;

		this.createCanvas();
		this.drawGeometry();
	}

	createCanvas(){
		this.canvas = document.createElement("canvas");
		this.paperScope = new paper.PaperScope();
		this.paperScope.setup(this.canvas);
	}

	drawGeometry(){
		this.path = new this.paperScope.Path();

		for(var p of this.geometry){
			this.path.add(new this.paperScope.Point(p.x, p.y));
		}

		this.path.smooth();
		this.path.simplify();

		this.path.fillColor = "white";

		//set path position to 0
		this.path.position.x -= this.path.bounds.x;
		this.path.position.y -= this.path.bounds.y;

		this.canvas.width = this.width = this.path.bounds.width;
		this.canvas.height = this.height = this.path.bounds.height;
		// this.bounds = this.path.bounds;
	}

	//****DEBUG add dat_gui functionality****/

	debugNormalAtPoint(point, normal){
		this.paperScope.activate();

		const path = new this.paperScope.Path.Circle({
		    center: [point.x, point.y],
		    radius: 10,
		    fillColor: 'red'
		});

		const path2 = new this.paperScope.Path.Circle({
		    center: [point.x - normal.x * 20, point.y - normal.y * 20],
		    radius: 10,
		    fillColor: 'green'
		});
	}

	debugBounds(){
		this.paperScope.activate();
		this.debugPath = new this.paperScope.Path.Rectangle(new this.paperScope.Point(0, 0), new this.paperScope.Size(this.canvas.width, this.canvas.height));
		this.debugPath.strokeColor = new this.paperScope.Color(0, 0, 0);
	}

}

export default Texture;