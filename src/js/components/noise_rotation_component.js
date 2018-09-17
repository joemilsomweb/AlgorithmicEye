class NoiseRotationComponent{
	
	constructor(options){
		this.noiseRotationX = Math.random();
		this.noiseRotationY = Math.random();

		this.rotation = 0;
		this.scale = options.scale || 0;
	}

	update(){
		this.noiseRotationX += 0.004;
		this.noiseRotationY += 0.004;

		this.rotation = noise.noise.simplex2(this.noiseRotationX, this.noiseRotationY) * Math.PI / 180;
		this.rotation *= this.scale;
	}

}

NoiseRotationComponent.prototype.name = "NOISE_ROTATION";

export default NoiseRotationComponent;