//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three-full";

class MaterialComponent{
	
	constructor(options){
		this.shader = options.shader;
		this.material = this.shader.material;	

		if(options.blendMode){
			this.material.blending = Three.CustomBlending;
			this.material.blendEquation = options.blendMode.equation;
			this.material.blendSrc = options.blendMode.src;
			this.material.blendDst = options.blendMode.dest;
		}	
	}

	update(){
		this.shader.update();
	}
	
}

//for use by the System, don't quite like using strings like this... Use constants file
MaterialComponent.prototype.name = "MATERIAL";

export default MaterialComponent;