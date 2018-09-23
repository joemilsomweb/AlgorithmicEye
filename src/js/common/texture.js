//class that 
class Texture{

	constructor(options){
		this.geometry = options.geometry;

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

		// this.path.fillColor = this.color;
		this.path.fillColor = "black";

		//set path position to 0
		this.path.position.x -= this.path.bounds.x;
		this.path.position.y -= this.path.bounds.y;

		this.canvas.width = this.width = this.path.bounds.width;
		this.canvas.height = this.height = this.path.bounds.height;
		this.bounds = this.path.bounds;
	}


}