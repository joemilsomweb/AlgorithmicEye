import ColourShader from "common/shaders/colour.shader";

const ShaderFactory = {
	generate : function(texture){
		this.shader = new ColourShader(texture);
	},

	//return new shader type??
	get : function(){
		return this.shader;
	}
};

export default ShaderFactory;

