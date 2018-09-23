//would be nice to have it as an import
let paper = require("paper");
import * as Three from "three";

//component that holds mesh data
//also holds shader/texture for operation on that data.
class MeshComponent{
	
	constructor(options){
		this.geometry = options.geometry;
		this.zOrder = options.zOrder;
		this.drawPos = options.drawPos;
		this.globalCompositeOperation = options.globalCompositeOperation;

		// this.color = options.color || new this.paperScope.Color(Math.random(), Math.random(), Math.random());

		this.createMesh();
	}

	//todo: add custom shaders
	createMesh(){
		this.geometry = new Three.PlaneBufferGeometry(100, 100, 100);
		this.material = new Three.MeshBasicMaterial({
			color : 0xff0000
		});

		this.mesh = new Three.Mesh(this.geometry, this.material);
		this.mesh.position.z = -1;
	}	
}

//for use by the System, don't quite like using strings like this...
MeshComponent.prototype.name = "MESH";

export default MeshComponent;