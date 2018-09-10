const RenderSystem = {

	render : function(canvas, entities) {
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);

		for(var entity of entities){
			
			//get position component
			const posComp = entity.components["POSITION"];		
			//get geometry component
			const meshComp = entity.components["MESH"];

			//draw image at center
			context.drawImage(meshComp.canvas, posComp.x - meshComp.bounds.width/2, posComp.y - meshComp.bounds.height/2);
		}
	}

}

export default RenderSystem;