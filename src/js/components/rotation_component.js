class RotationComponent{
	
	constructor(options){
		this.x = options.x;
		this.y = options.y;
	}

}

RotationComponent.prototype.name = "ROTATION";

export default RotationComponent;