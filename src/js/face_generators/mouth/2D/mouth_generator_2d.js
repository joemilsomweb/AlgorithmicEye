import * as Three from "three-full";
import AbstractGenerator2D from "face_generators/abstract_generator_2d";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/mouth_geometry"};

const MouthGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 150,
		minimum : 150
	} 
});

export default MouthGenerator;
