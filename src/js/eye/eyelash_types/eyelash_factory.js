
//maybe can be either data via points or algorithmic possibly 
//possibly could curry functions to create functions that operate on the data and to generate
//the generateOutline function, but also have algorithmic functions coded manually   
let generatorFunctions = [];
// let generatorFunctions = [AlmondHOutlineType];


const EyelashFactory = {
	generate : function(){
		this.geometry = [];
	},

	get : function(){
		return this.geometry;
	}

};

export default EyelashFactory;

