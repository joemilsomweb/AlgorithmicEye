import RoundOutlineType from 'face_generators/eye/outline_types/round_type';
import Texture from "common/texture";

//bit funky, create inline function via loader that imports all outline datas from directory
let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/outline_geometry"};

//create extendable class maybe?
const OutlineFactory = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			//size is set manually here. Can I do better?
			const s = Math.random() * 400 + 200;
			
			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.1) * s, y : (point.y + 0.1) * s}
			});
		}
		else{			
			this.geometry = generator.generateOutline();
		}
	},

	get : function(){
		return this.geometry;
	},

	getGeometry : function(){
		return this.geometry;
	},

	createTexture(){

	},

	createPath(){

	},

	getTexture(){

	},

	getPath(){

	}

};

export default OutlineFactory;

