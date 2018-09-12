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

		// this.debugAIScript();
		// this.debugBounds();
	}

	debugAIScript (){
	  this.context.save();
      this.context.beginPath();
      this.context.moveTo(6.3, 226.2);
      this.context.bezierCurveTo(-1.0, 181.4, -1.4, 135.9, 5.1, 91.0);
      this.context.bezierCurveTo(7.0, 77.5, 9.7, 63.7, 17.9, 51.5);
      this.context.bezierCurveTo(22.5, 44.5, 28.9, 38.2, 35.8, 32.3);ad
  
      this.context.bezierCurveTo(46.3, 23.3, 58.3, 15.0, 72.7, 9.8);
      this.context.bezierCurveTo(89.4, 3.7, 108.3, 2.3, 126.8, 1.0);
      this.context.bezierCurveTo(135.5, 0.4, 144.8, -0.2, 152.6, 2.9);
      this.context.bezierCurveTo(156.6, 4.5, 159.8, 6.9, 163.5, 9.0);
      this.context.bezierCurveTo(170.7, 12.9, 179.4, 15.1, 187.0, 18.6);
      this.context.bezierCurveTo(205.1, 27.1, 215.6, 42.6, 222.4, 58.0);
      this.context.bezierCurveTo(237.0, 91.2, 238.2, 126.9, 239.1, 161.9);
      this.context.bezierCurveTo(239.8, 184.6, 240.4, 207.2, 241.1, 229.8);
      this.context.bezierCurveTo(162.1, 239.2, 81.6, 234.6, 1.9, 229.9);
      this.context.stroke();
      this.context.restore();
	}

	debugBounds(){
		this.context.strokeStyle = "#000000";
		this.context.strokeRect(0, 0, this.bounds.width, this.bounds.height);
	}
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;