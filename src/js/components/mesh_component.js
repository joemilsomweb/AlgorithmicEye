import BoundsCalculator from "helper/bounds_calculator";

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
		this.context = this.canvas.getContext('2d');
	}

	//separate this logic out of here?? i think so
	//maybe makes sense for this project though??
	drawGeometry(){
		this.context.lineWidth = 3;			
		this.context.strokeStyle = "#000000";

		this.context.save();
		this.context.globalCompositeOperation = "source-over";
		// this.context.translate(this.canvas.width/2, this.canvas.height/2);

		//store as shape instead
		this.context.beginPath();
		this.context.moveTo(this.geometry[0].x, this.geometry[0].y);
			
		for(let i = 1; i < this.geometry.length; i++){
			let point = this.geometry[i];
			this.context.lineTo(point.x, point.y);

			this.context.stroke();
		}

		// this.context.lineTo(this.geometry[0].x, (this.geometry[0].y) );
		this.context.stroke();

		// this.debugBounds();
	}

	debugBounds(){
		this.context.strokeStyle = "#000000";
		this.context.strokeRect(0, 0, this.bounds.width, this.bounds.height);
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;