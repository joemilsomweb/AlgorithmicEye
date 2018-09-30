import * as Three from "three-full";
import AbstractGenerator2D from "face_generators/abstract_generator_2d";

import ColourShader from "shaders/material_shaders/colour_shader/colour.shader";

let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/eyelash_geometry"};

let TeethGenerator = new AbstractGenerator2D({
	generatorFunctions : generatorFunctions,
	size : {
		randomFactor : 42,
		minimum : 20
	} 
});

/***OVERRIDE***/

TeethGenerator.getCurrentShader = function(){
	return new ColourShader(this.texture.canvas, new Three.Vector4(1, 1, 1, 1));
};



export default TeethGenerator;
