//todo add more shaders
import ColourShader from "common/shaders/colour_shader/colour.shader";
import RandomColourShader from "common/shaders/random_colour/random_colour.shader";

const shaderList = [ColourShader, RandomColourShader];

const ShaderFactory = {
	generate : function(texture){
		const shader = shaderList[Math.floor(Math.random()*shaderList.length)];

		this.shader = new shader(texture);
	},

	//return new shader type??
	get : function(){
		return this.shader;
	}
};

export default ShaderFactory;

