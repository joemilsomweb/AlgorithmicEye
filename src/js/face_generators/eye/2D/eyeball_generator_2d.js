import * as Three from "three-full";

import AbstractGenerator2D from "face_generators/abstract_generator_2d";

//bit funky, create inline function via loader that imports all outline datas from directory
let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/outline_geometry"};

const EyeballGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 300,
		minimum : 150
	} 
});

export default EyeballGenerator;

