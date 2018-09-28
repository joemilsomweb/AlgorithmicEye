import Texture from "shaders/texture";
import ShaderFactory from "shaders/shader_factory";
import * as Three from "three-full";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/mouth_geometry"};

//create extendable class maybe? Maybe use prototypical inheritance instead
const MouthGenerator = {
	generate(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			//size is set manually here. Can I do better?
			const size = Math.random() * 150 + 150;
			
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
		//instead of plane buffer geometry, how about generating a mesh from the points?
		let geometry = new Three.PlaneBufferGeometry(this.texture.width, this.texture.height);
		let material = new Three.MeshBasicMaterial({
			color : 0xff0000
		});

		let mesh = new Three.Mesh(geometry, material);

		// mesh = this.getMeshFromPoints();

		return mesh;
	},

	//try to get working? or less efficient?
	getMeshFromPoints(){
		//map geometry points to an array of three vectors
		let geometryPoints = this.geometry.map((point) => {return new Three.Vector3(point.x, point.y, 0);});

		let geometry = new Three.Geometry();

		let index = 0;
		for(let p of geometryPoints){
		    geometry.vertices.push(p);
		};
		geometry.vertices.push( geometryPoints[0] );

		for(let i = 2; i < geometryPoints.length; i++){
			// const b = i - 100 > 0 ? i-20 : 0; 
			geometry.faces.push( new Three.Face3(0, i-1, i));
		}

		// let geometry = new Three.ConvexBufferGeometry(geometryPoints);
		let material = new Three.MeshBasicMaterial({
			color : 0xff0000
		});

		let mesh = new Three.Mesh(geometry, material);

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

export default MouthGenerator;

