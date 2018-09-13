import BoundsCalculator from "helper/bounds_calculator";

import TestDraw from "data/pupil_geometry/bean_draw";
import TestData from "data/outline_geometry/anime_outline_data";

//would be nice to have it as an import
const paper = require("paper");
console.log(paper);

//Class that contains the geometry, calculates the bounds based on this geometry
//as well as creates a canvas that fits the geometry for efficiency
class MeshComponent{
	
	constructor(options){
		this.geometry = options.geometry;
		this.bounds = BoundsCalculator.calculateBounds(this.geometry);
		this.createCanvas();
		this.drawGeometry();
	}

	//good or bad?
	createCanvas(){
		this.canvas = document.createElement("canvas");
		
		//for now
		this.canvas.width = this.bounds.width;
		this.canvas.height = this.bounds.height;

		this.canvas.width = 500;
		this.canvas.height = 500;
		this.context = this.canvas.getContext('2d');
		paper.setup(this.canvas);
	}

	drawGeometry(){
		let path = new paper.Path();
		path.strokeColor = "black";
		for(var p of this.geometry){
			path.add(new paper.Point(p.x, p.y));
		}
		path.smooth();
		path.simplify();

		this.debugAIScript();
	}

	debugAIScript (){
		//FOR EYELASHES!! YAYAYAY
		// Create a small circle shaped path at the point:
		// for(let i = 0; i < 8; i++){
		// 	let l = path.length/8; 	
		// 	let point = path.getPointAt(l*i);
		// 	let circle = new paper.Path.Circle({
		// 	    center: point,
		// 	    radius: 3,
		// 	    fillColor: 'red'
		// 	});
		// }
	}

	debugBounds(){
		this.context.strokeStyle = "#000000";
		this.context.strokeRect(0, 0, this.bounds.width, this.bounds.height);
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;