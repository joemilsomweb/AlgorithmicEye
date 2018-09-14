import RoundOutlineType from 'eye/outline_types/round_type';

import AnimeOutlineData from 'data/outline_geometry/anime_outline_data';
import AlmondHorizontalData from 'data/outline_geometry/almond_horizontal_data';
import AlmondVerticalData from 'data/outline_geometry/almond_vertical_data';
import ShiftyOutlineData from 'data/outline_geometry/shifty_eye_data';


//maybe can be either data via points or algorithmic possibly 
//possibly could curry functions to create functions that operate on the data and to generate
//the generateOutline function, but also have algorithmic functions coded manually   
let generatorFunctions = [AnimeOutlineData, AlmondHorizontalData, AlmondVerticalData, ShiftyOutlineData];
// let generatorFunctions = [AlmondHOutlineType];


const OutlineFactory = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
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
	}

};

export default OutlineFactory;

