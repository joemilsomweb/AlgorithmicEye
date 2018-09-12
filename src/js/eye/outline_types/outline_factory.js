import RoundOutlineType from 'eye/outline_types/round_type';
import AnimeOutlineType from 'eye/outline_types/anime_type';
import AlmondHOutlineType from 'eye/outline_types/almond_horizontal_type';

//maybe can be either data via points or algorithmic possibly 
//possibly could curry functions to create functions that operate on the data and to generate
//the generateOutline function, but also have algorithmic functions coded manually   
let generatorFunctions = [RoundOutlineType, AnimeOutlineType, AlmondHOutlineType];
// let generatorFunctions = [AlmondHOutlineType];


const OutlineFactory = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		this.geometry = generator.generateOutline();
	},

	get : function(){
		return this.geometry;
	}

};

export default OutlineFactory;

