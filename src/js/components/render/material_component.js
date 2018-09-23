//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three";

class MaterialComponent{
	
	constructor(options){
		this.material = options.material;		
		// this.texture = options.texture;
	}

	update(){
		this.material.update();
	}
	
}

//for use by the System, don't quite like using strings like this... Use constants file
MaterialComponent.prototype.name = "MATERIAL";

export default MaterialComponent;