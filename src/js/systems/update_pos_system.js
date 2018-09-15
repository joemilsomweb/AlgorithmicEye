const UpdatePosSystem = {

	update : function(entities) {
		for(var entity of entities){
			

			//get position component
			const noiseComp = entity.components["NOISE"];		
			const posComp = entity.components["POSITION"];		
			//get geometry component
			if(noiseComp){
				noiseComp.update();
				// console.log(noiseComp.sinOffset);
				posComp.y += noiseComp.offsetX; 
			}
		}
	}

}

export default UpdatePosSystem;