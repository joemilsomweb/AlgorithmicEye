const RenderSystem = {

	render : function(canvas, entities) {
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);

		//inefficient to be sorting every frame
		//but we don't have many frames
		entities.sort(this.sortByZ); 

		let drawableEntities = [];

		for(var entity of entities){
			//get position component
			//TODO create check for components first
			const posComp = entity.getComponent("POSITION");		
			//get geometry component
			const meshComp = entity.getComponent("MESH");

			//draw image at center
			//TODO refactor later
			context.globalCompositeOperation = meshComp.globalCompositeOperation || "source-over"; 
			context.drawImage(meshComp.canvas, posComp.x - meshComp.width/2, posComp.y - meshComp.height/2);
		}
	},

	sortByZ : function(a, b){
		a.components["MESH"].zOrder
		if(a.components["MESH"].zOrder < b.components["MESH"].zOrder){
			return -1;
		}
		if(a.components["MESH"].zOrder > b.components["MESH"].zOrder){
			return 1;
		}
		return 0;
	}

}

export default RenderSystem;