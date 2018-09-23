const ThreeRenderSystem = {

	render : function(entities, threeRenderer, threeScene, camera) {

		for(var entity of entities){
			if(entity.getComponent("MESH")){
				const meshComp = entity.getComponent("MESH");

				let posComp = entity.getComponent("POSITION");
				meshComp.mesh.position.x = posComp.x/ 10;
				meshComp.mesh.position.y = posComp.y/ 10;

				//todo dont add every frame!!
				threeScene.add(meshComp.mesh);
			}			
		}

		threeRenderer.render(threeScene, camera);
	}

}

export default ThreeRenderSystem;