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

			context.save();

			const rotation = entity.getComponent("ROTATION") ? entity.getComponent("ROTATION").rotation : 0; 
			const scale = entity.getComponent("SCALE") ? entity.getComponent("SCALE").scale : 1; 
			const noiseRotation = entity.getComponent("NOISE_ROTATION") ? entity.getComponent("NOISE_ROTATION").rotation : 0; 

			context.translate(posComp.x, posComp.y);
			context.rotate(rotation + noiseRotation);
			context.scale(scale, scale);

			if(meshComp.drawPos === "CENTER"){
				context.translate(-meshComp.width/2, -meshComp.height/2);
			}
			else if(meshComp.drawPos === "BOTTOM-CENTER"){
				context.translate(-meshComp.width/2, -meshComp.height + 5);
			}


			//draw image at center
			//TODO refactor later
			context.globalCompositeOperation = meshComp.globalCompositeOperation || "source-over"; 
			context.drawImage(meshComp.canvas, 0, 0);
		
			context.restore();
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