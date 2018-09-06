import RoundPupilType from 'eye/pupil_types/round_pupil_type';
import BeanPupilType from 'eye/pupil_types/bean_pupil_type';

// let generatorFunctions = [RoundPupilType, BeanPupilType];
let generatorFunctions = [BeanPupilType];

const PupilFactory = {
	generate : function(){
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		this.geometry = generator.generateOutline();
	},

	get : function(){
		return this.geometry;
	}
};

export default PupilFactory;

