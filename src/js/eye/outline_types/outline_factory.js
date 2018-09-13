import RoundOutlineType from 'eye/outline_types/round_type';

import AnimeOutlineData from 'data/outline_geometry/anime_outline_data';
import AlmondHorizontalData from 'data/outline_geometry/almond_horizontal_data';


//maybe can be either data via points or algorithmic possibly 
//possibly could curry functions to create functions that operate on the data and to generate
//the generateOutline function, but also have algorithmic functions coded manually   
let generatorFunctions = [RoundOutlineType, AnimeOutlineData, AlmondHorizontalData];
// let generatorFunctions = [AlmondHOutlineType];


const OutlineFactory = {
	generate : function(){
		//choose random generator from list
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			const w = Math.random() * 100 + 80;
			const h = Math.random() * 100 + 80;

			this.geometry = generator.map((point) => {
				return {x : point.x * w, y : point.y * h}
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

