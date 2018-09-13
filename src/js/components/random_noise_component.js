class NoiseComponent{
	
	constructor(options){
		this.sinOffset = 0;
		this.update();
	}

	update(){
		this.sinOffset += 0.1
		this.offsetX = Math.sin(this.sinOffset) * 2;
	}

}

NoiseComponent.prototype.name = "NOISE";

export default NoiseComponent;