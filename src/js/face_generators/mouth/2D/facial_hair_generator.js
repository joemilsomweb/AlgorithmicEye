import Texture from "shaders/texture";
import ShaderFactory from "shaders/shader_factory";
import * as Three from "three-full";
import AbstractGenerator2D from "face_generators/abstract_generator_2d";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/pupil_geometry"};

const PupilGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 20,
		minimum : 50
	} 
});

export default PupilGenerator;
