import * as Three from "three";

class ColourShader{
	constructor(texture){
		this.material = new Three.MeshBasicMaterial({
			color : 0xffffff
			// map : new Three.Texture(texture)
		});

		document.body.appendChild(texture);
		texture.style.position = "absolute";
		texture.style.top =  0;
		texture.style.left = 0;

		// this.material.map.needsUpdate = true;
	}

	update(){

	}	

}

export default ColourShader;