import * as Three from "three";

class ColourShader{
	constructor(texture){
		this.material = new Three.MeshBasicMaterial({
			color : 0xffffff,
			map : new Three.CanvasTexture(texture)
		});
	}

	update(){

	}	

}

export default ColourShader;