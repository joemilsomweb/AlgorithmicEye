//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three";

//component that holds mesh data
//also holds shader/texture for operation on that data.
class MeshComponent{
	
	constructor(options){
		this.geometry = options.geometry;
		this.zOrder = options.zOrder;
		this.drawPos = options.drawPos;
		this.globalCompositeOperation = options.globalCompositeOperation;

		this.createCanvas();

		this.color = options.color || new this.paperScope.Color(Math.random(), Math.random(), Math.random());

		this.drawGeometry();

		//new code
		this.createMesh();
	}

	//todo: add custom shaders
	createMesh(){
		const geometry = new Three.PlaneBufferGeometry(1, 1, 1);
		this.mesh = new Three.MeshBasicMaterial({
			color : 0xff0000
			//map: my new Texture class
		});
		// this.shader = new 
	}	

	//good or bad?
	createCanvas(){
		this.canvas = document.createElement("canvas");
		this.paperScope = new paper.PaperScope();
		this.paperScope.setup(this.canvas);
	}

	drawGeometry(){
		this.path = new this.paperScope.Path();
		// this.path.strokeColor = "black";
		for(var p of this.geometry){
			this.path.add(new this.paperScope.Point(p.x, p.y));
		}

		this.path.smooth();
		this.path.simplify();

		this.path.fillColor = this.color;
		// this.path.strokeColor = "black";
		// this.path.strokeWidth = 2;

		//set path position to 0
		this.path.position.x -= this.path.bounds.x;
		this.path.position.y -= this.path.bounds.y;

		this.canvas.width = this.width = this.path.bounds.width;
		this.canvas.height = this.height = this.path.bounds.height;
		this.bounds = this.path.bounds;
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

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;