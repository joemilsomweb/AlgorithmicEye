//pupils from manual code
import RoundPupilType from 'eye/pupil_types/round_pupil_type';

//pupils from data. todo make curried function
import BeanPupilData from 'data/pupil_geometry/bean_pupil_data';
import VAlmondPupilData from 'data/pupil_geometry/almond_v_pupil_data';


// let generatorFunctions = [BeanPupilData, RoundPupilType, VAlmondPupilData];
let generatorFunctions = [BeanPupilData, VAlmondPupilData];

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

