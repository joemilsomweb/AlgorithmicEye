

const ThreeRenderSystem = {

	render : function(entities, scene) {
		this.removeOldMeshes(scene.scene, entities);

		for(var entity of entities){
			if(entity.getComponent("MESH")){
				const meshComp = entity.getComponent("MESH");

				//todo dont add every frame!! Do it at the initialisation stage
				if(!meshComp.mesh.parent){
					scene.scene.add(meshComp.mesh);
				}

				let posComp = entity.getComponent("POSITION");
				meshComp.mesh.position.x = posComp.x;
				meshComp.mesh.position.y = posComp.y;
				meshComp.mesh.position.z = posComp.z;

				const matComp = entity.getComponent("MATERIAL");
				matComp.update();

				meshComp.mesh.material = matComp.material;

				//todo put in rotation system
				meshComp.mesh.rotation.z = entity.getComponent("ROTATION") ? entity.getComponent("ROTATION").rotation : 0; 
				meshComp.mesh.rotation.z += entity.getComponent("NOISE_ROTATION") ? entity.getComponent("NOISE_ROTATION").rotation : 0; 
			}			
		}
		scene.renderer.render(scene.scene, scene.camera, scene.renderTarget);
	},

	//this does not need to be here. put it outside, so its not running every frame
	removeOldMeshes : function(scene, entities){
		// get meshes from mesh components 
		let currentMeshes = entities.map((entity) => {return entity.getComponent("MESH").mesh;});
		
		// find intersection of 2 arrays
		let meshesToRemove = scene.children.filter((childMesh) => {return currentMeshes.indexOf(childMesh) === -1});

		for(let child of meshesToRemove){
			scene.remove(child);
		}
	}

}

export default ThreeRenderSystem;