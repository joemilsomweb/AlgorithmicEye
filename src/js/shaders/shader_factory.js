import ShaderFactoryGroups from "data/shader_factory_groups";

class ShaderFactory{

	constructor(options){
		if(options){
			this.shaderList = options.shaderList || ShaderFactoryGroups.DEFAULT;
		}
		else{
			this.shaderList = ShaderFactoryGroups.DEFAULT;
		}
	}

	generate(texture){
		const shader = this.shaderList[Math.floor(Math.random()*this.shaderList.length)];

		this.shader = shader.bind(null, texture);
	}

	get(){
		return this.shader;
	}
};

export default ShaderFactory;

