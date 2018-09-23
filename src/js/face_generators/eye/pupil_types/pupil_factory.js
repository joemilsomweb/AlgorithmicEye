//pupils from manual code
import RoundPupilType from 'face_generators/eye/pupil_types/round_pupil_type';

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/pupil_geometry"};

const PupilFactory = {
	generate : function(){
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			const s = Math.random() * 130 + 20;

			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.2) * s, y : (point.y + 0.2) * s}
			});
		}
		else{			
			this.geometry = generator.generateOutline();
		}
	},

	get : function(){
		return this.geometry;
	}
};

export default PupilFactory;

