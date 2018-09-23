const ThreeRenderSystem = {

	render : function(entities, threeRenderer, threeScene, camera) {

		for(var entity of entities){
			if(entity.getComponent("MESH")){
				const meshComp = entity.getComponent("MESH");
				threeScene.add(meshComp.mesh);
			}			
		}

		threeRenderer.render(threeScene, camera);
	}

}

export default ThreeRenderSystem;