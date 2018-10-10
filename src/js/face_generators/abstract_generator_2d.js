import Texture from "shaders/texture";
import ShaderFactory from "shaders/shader_factory";
import * as Three from "three-full";

class AbstractGenerator2D{

	constructor(options){
		this.generatorFunctions = options.generatorFunctions;
		this.sizeRandomFactor = options.size.randomFactor;
		this.sizeMinimum = options.size.minimum;

		//pass in shader factory 
		this.shaderFactory = options.shaderFactory || new ShaderFactory();
	}

	generate(){
		this.size = Math.random() * this.sizeRandomFactor + this.sizeMinimum;
		// this.sizeY = Math.random() * this.sizeRandomFactor + this.sizeMinimum;

		//choose random generator from list
		const generator = this.generatorFunctions[Math.floor(Math.random()*this.generatorFunctions.length)];
		if(Array.isArray(generator)){
			//size is set manually here. Can I do better?			
			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.1) * this.size, y : (point.y + 0.1) * this.size}
			});
		}
		else{			
			this.geometry = generator.generateOutline();
		}

		this.createTexture();
		this.createShader();
	}

	createTexture(){
		this.texture = new Texture(this.geometry);
		this.path = this.texture.path; //path generated from paper context
	}

	createShader(){
		this.shaderFactory.generate(this.texture.canvas);
		this.shader = this.shaderFactory.get();
	}

	getCurrentMesh(){
		let geometry = new Three.PlaneBufferGeometry(this.texture.width, this.texture.height);
		// let geometry = new Three.SphereGeometry(this.texture.width);
		let material = new Three.MeshBasicMaterial({
			color : 0xff0000
		});

		let mesh = new Three.Mesh(geometry, material);

		return mesh;
	}

	getCurrentPath(){
		return this.path;
	}

	getCurrentTexture(){
		return this.texture.canvas;
	}

	getCurrentShader(){
		return new this.shader;
	}

}

export default AbstractGenerator2D;

