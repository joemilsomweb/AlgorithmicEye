import RoundOutlineType from 'face_generators/eye/outline_types/round_type';
import Texture from "common/texture";
import ShaderFactory from "common/shader_factory";
import * as Three from "three";

//bit funky, create inline function via loader that imports all outline datas from directory
let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/outline_geometry"};

//create extendable class maybe? Maybe use prototypical inheritance instead
const EyeballGenerator = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			//size is set manually here. Can I do better?
			const size = Math.random() * 400 + 200;
			
			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.1) * size, y : (point.y + 0.1) * size}
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
		mesh.position.z = -1;

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
		return this.shader;
	}

};

export default EyeballGenerator;

