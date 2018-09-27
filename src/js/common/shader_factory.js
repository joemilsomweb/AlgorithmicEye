//todo add more shaders
import ColourShader from "common/shaders/colour_shader/colour.shader";
import RandomColourShader from "common/shaders/random_colour/random_colour.shader";
import RayMarchBlobShader from "common/shaders/raymarch_blob/raymarch_blob.shader";

const shaderList = [ColourShader, RandomColourShader];
// const shaderList = [ColourShader, RandomColourShader, RayMarchBlobShader];
// const shaderList = [RayMarchBlobShader];

const ShaderFactory = {
	generate : function(texture){
		const shader = shaderList[Math.floor(Math.random()*shaderList.length)];

		//TEMPORARY! BAD TO STORE THIS HERE
		this.texture = texture;
		// this.shader = new shader(texture);
		// this.shader = shader;
		this.shader = shader.bind(null, texture);
	},

	//return new shader type??
	get : function(){
		return this.shader;
	}
};

export default ShaderFactory;

