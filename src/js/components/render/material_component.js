//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three";


class MaterialComponent{
	
	constructor(options){
		
	}

	updateShaderUniforms(){

	}
	
}

//for use by the System, don't quite like using strings like this... Use constants file
MaterialComponent.prototype.name = "MATERIAL_COMPONENT";

export default MaterialComponent;