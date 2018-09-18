class BlinkComponent{
	
	constructor(options){
		this.scale = 1;
		this.sinOffset = 0;
	}

	updateScale(){
		this.sinOffset += 0.05;
		this.scale = (Math.sin(this.sinOffset) + 1)/2;
	}
}

BlinkComponent.prototype.name = "BLINK_COMPONENT";

export default BlinkComponent;