import BoundsCalculator from "helper/bounds_calculator";

//would be nice to have it as an import
const paper = require("paper");

//Class that contains the geometry, calculates the bounds based on this geometry
//as well as creates a canvas that fits the geometry for efficiency
class MeshComponent{
	
	constructor(options){
		this.geometry = options.geometry;
		this.zOrder = options.zOrder;
		this.center = options.center;
		this.globalCompositeOperation = options.globalCompositeOperation;

		this.createCanvas();
		this.drawGeometry();
	}

	//good or bad?
	createCanvas(){
		this.canvas = document.createElement("canvas");
		
		paper.setup(this.canvas);
	}

	drawGeometry(){
		this.path = new paper.Path();
		// this.path.strokeColor = "black";
		for(var p of this.geometry){
			this.path.add(new paper.Point(p.x, p.y));
		}

		this.path.smooth();
		this.path.simplify();

		this.path.fillColor = new paper.Color(Math.random(), Math.random(), Math.random());

		this.canvas.width = this.width = this.path.bounds.width + this.path.bounds.x;
		this.canvas.height = this.height = this.path.bounds.height + this.path.bounds.y;
		this.bounds = this.path.bounds;
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;