const RenderSystem = {

	render : function(canvas, entities) {
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);

		for(var entity of entities){
			
			//get position component
			const posComp = entity.components["POSITION"];		
			//get geometry component
			const meshComp = entity.components["MESH"];

			context.drawImage(meshComp.canvas, posComp.x, posComp.y);
		}
	}

}

export default RenderSystem;