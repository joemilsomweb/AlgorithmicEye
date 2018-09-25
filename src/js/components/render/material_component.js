//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three";

class MaterialComponent{
	
	constructor(options){
		this.shader = options.shader;
		this.material = this.shader.material;		
	}

	update(){
		this.shader.update();
	}
	
}

//for use by the System, don't quite like using strings like this... Use constants file
MaterialComponent.prototype.name = "MATERIAL";

export default MaterialComponent;