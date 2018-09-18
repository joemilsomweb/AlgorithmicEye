class BlinkComponent{
	
	constructor(options){

	}

	getMouseVector(){
		return {
			x : 1, 
			y : 0 
		}
	}

}

BlinkComponent.prototype.name = "BLINK_COMPONENT";

export default BlinkComponent;