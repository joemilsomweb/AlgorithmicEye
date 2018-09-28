import Texture from "shaders/texture";
import ShaderFactory from "shaders//shader_factory";
import * as Three from "three-full";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/eyelash_geometry"};

const PupilGenerator = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			//size is set manually here. Can I do better?
			const s = Math.random() * 20 + 60;
			
			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.1) * s, y : (point.y + 0.1) * s}
			});
		}
		else{			
			this.geometry = generator.generateOutline();
		}

		this.createTexture();
		this.createShader();
	},

	createTexture(){
		this.texture = new Texture(this.geometry);
		this.path = this.texture.path; //path generated from paper context
	},

	createShader(){
		ShaderFactory.generate(this.texture.canvas);
		this.shader = ShaderFactory.get();
	},

	getCurrentMesh(){
		let geometry = new Three.PlaneBufferGeometry(this.texture.width, this.texture.height);
		let material = new Three.MeshBasicMaterial({
			color : 0xff0000
		});

		let mesh = new Three.Mesh(geometry, material);
		mesh.position.z = 0;

		return mesh;
	},

	getCurrentPath(){
		return this.path;
	},

	getCurrentTexture(){
		//rename?.... for sure bro
		return this.texture.canvas;
	},

	getCurrentShader(){
		return new this.shader;
	}

};

export default PupilGenerator;

	