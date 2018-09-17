const paper = require("paper");

class BoundsComponent{
	
	constructor(options){
		this.boundsPath = options.boundsPath;
	}

	checkBounds(x, y){
		return this.boundsPath.contains(new paper.Point(x, y));
	}

}

BoundsComponent.prototype.name = "BOUNDS";

export default BoundsComponent;