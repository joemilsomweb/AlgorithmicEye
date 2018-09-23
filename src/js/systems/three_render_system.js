const RenderSystem = {

	render : function(entities, threeRenderer, threeScene, camera) {

		threeRenderer.render(threeScene, camera);

		for(var entity of entities){
			
		}

		threeRenderer.render();
	}

}

export default RenderSystem;