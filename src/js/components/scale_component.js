
class ScaleComponent{
	
	constructor(options){
		this.boundsPath = options.boundsPath;
	}

	checkBounds(x, y){
		return this.boundsPath.contains(new paper.Point(x, y));
	}

}

ScaleComponent.prototype.name = "BOUNDS";

export default ScaleComponent;