class PositionComponent{
	
	constructor(options){
		this.x = options.x;
		this.y = options.y;
		this.parent = options.parent;
	}

}

PositionComponent.prototype.name = "POSITION";

export default PositionComponent;