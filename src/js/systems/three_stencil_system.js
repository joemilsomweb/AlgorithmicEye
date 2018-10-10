import * as Three from "three-full";

let g = new Three.PlaneBufferGeometry(300, 300, 32);
let material = new Three.MeshBasicMaterial({color : new Three.Vector4(1, 1, 1, 1)});
let testMesh = new Three.Mesh(g, material);
testMesh.position.z = -1;

const ThreeStencilSystem = {

	render : function(entities, scene) {
		// scene.renderer.autoClear = false;
		// scene.renderer.clear(true, false, true);

		for(var entity of entities){
			if(entity.getComponent("STENCIL")){
				// entity.getComponent("MESH").mesh.scale.x = 0.2;
				// entity.getComponent("MESH").mesh.scale.y = 0.2;
				scene.renderer.render(entity.getComponent("MESH").mesh, scene.camera, scene.stencilTarget);
			}
		}
	}

}

export default ThreeStencilSystem;