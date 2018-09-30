import * as Three from "three-full";
import AbstractGenerator2D from "face_generators/abstract_generator_2d";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/pupil_geometry"};

const FacialHairOutlineGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 10,
		minimum : 1500
	} 
});

export default FacialHairOutlineGenerator;
