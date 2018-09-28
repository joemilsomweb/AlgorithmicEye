//todo add more shaders
import ColourShader from "shaders/shaders/colour_shader/colour.shader";
import RandomColourShader from "shaders/shaders/random_colour/random_colour.shader";
import RayMarchBlobShader from "shaders/shaders/raymarch_blob/raymarch_blob.shader";

// const shaderList = [ColourShader, RandomColourShader];
const shaderList = [ColourShader, RandomColourShader, RayMarchBlobShader];
// const shaderList = [RayMarchBlobShader];

const ShaderFactory = {
	generate : function(texture){
		const shader = shaderList[Math.floor(Math.random()*shaderList.length)];

		// this.shader = shader;
		//maybe pass in texture to the get function instead...
		this.shader = shader.bind(null, texture);
	},

	//return new shader type??
	get : function(){
		return this.shader;
	}
};

export default ShaderFactory;

