class BoundsComponent{
	
	constructor(options){
		this.bounds = options.bounds;
	}

	checkBounds(x, y){
		if(x < bounds.x || x > bounds.x){
			return true;
		}
		if(y < bounds.y || y > bounds.y){
			return true;
		}
		
		return false;
	}

}

BoundsComponent.prototype.name = "BOUNDS";

export default BoundsComponent;