import PetalOutlineData from 'data/eyelash_geometry/petal_eyelash_data';
import StraightOutlineData from 'data/eyelash_geometry/straight_eyelash_data';
import CloverOutlineData from 'data/eyelash_geometry/clover_eyelash_data';
import SharpLeafOutlineData from 'data/eyelash_geometry/sharp_leaf_data';
import SquigglesOutlineData from 'data/eyelash_geometry/squiggles_eyelash_data';

//maybe can be either data via points or algorithmic possibly 
//possibly could curry functions to create functions that operate on the data and to generate
//the generateOutline function, but also have algorithmic functions coded manually   
// let generatorFunctions = [];
let generatorFunctions = [StraightOutlineData, PetalOutlineData, CloverOutlineData, SharpLeafOutlineData, SquigglesOutlineData];


const EyelashFactory = {
	generate : function(){
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			const s = Math.random() * 30 + 80;
			
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

export default EyelashFactory;

