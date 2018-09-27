const ThreeRenderSystem = {

	render : function(entities, threeRenderer, threeScene, camera) {

		this.removeOldMeshes(threeScene, entities);

		for(var entity of entities){
			if(entity.getComponent("MESH")){
				const meshComp = entity.getComponent("MESH");

				let posComp = entity.getComponent("POSITION");
				meshComp.mesh.position.x = posComp.x;
				meshComp.mesh.position.y = posComp.y;

				const matComp = entity.getComponent("MATERIAL");
				matComp.update();

				meshComp.mesh.material = matComp.material;


				//todo put in rotation system
				meshComp.mesh.rotation.z = entity.getComponent("ROTATION") ? entity.getComponent("ROTATION").rotation : 0; 
				// console.log(entity.getComponent("ROTATION"));
				//todo dont add every frame!!
				threeScene.add(meshComp.mesh);
			}			
		}

		threeRenderer.render(threeScene, camera);
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