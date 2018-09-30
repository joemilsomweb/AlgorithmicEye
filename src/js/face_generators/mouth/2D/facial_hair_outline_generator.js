import * as Three from "three-full";
import AbstractGenerator2D from "face_generators/abstract_generator_2d";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/moustache_geometry"};

const FacialHairGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 20,
		minimum : 60
	} 
});

export default FacialHairGenerator;
