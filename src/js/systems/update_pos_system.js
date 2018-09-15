const UpdatePosSystem = {

	update : function(entities) {
		for(var entity of entities){
			//get position component
			const noiseComp = entity.getComponent("NOISE");		
			const boundsComp = entity.getComponent("BOUNDS");		
			const posComp = entity.getComponent("POSITION");		
			//get geometry component
			if(noiseComp){
				noiseComp.update();
				// console.log(noiseComp.sinOffset);
				posComp.x += noiseComp.offsetX * 5; 
				// posComp.y += 10; 
			}

			if(boundsComp){
				posComp.x = this.clamp(posComp.x, boundsComp.bounds.x, boundsComp.bounds.x + boundsComp.bounds.width);
				posComp.y = this.clamp(posComp.y, boundsComp.bounds.y, boundsComp.bounds.y + boundsComp.bounds.height);
			}
		}
	},

	clamp : function(value, min, max){
		return Math.min(Math.max(value, min), max);
	}

}

export default UpdatePosSystem;