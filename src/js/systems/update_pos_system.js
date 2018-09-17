const UpdatePosSystem = {

	update : function(entities) {
		for(var entity of entities){
			//get position component
			const noiseComp = entity.getComponent("NOISE");		
			const boundsComp = entity.getComponent("BOUNDS");		
			const posComp = entity.getComponent("POSITION");		
			const mouseFollowComp = entity.getComponent("MOUSE_FOLLOW");		
			const noiseRotation = entity.getComponent("NOISE_ROTATION");		


			if(boundsComp){
				let isInsidePath = boundsComp.checkBounds(posComp.x, posComp.y);
			}

			if(mouseFollowComp){
				posComp.x += mouseFollowComp.getMouseVector().x; 
			}

			if(noiseComp){
				noiseComp.update();
				posComp.x += noiseComp.offsetX * 10; 
			}

			if(noiseRotation){
				noiseRotation.update();
			}
		}
	},



	clamp : function(value, min, max){
		return Math.min(Math.max(value, min), max);
	}

}

export default UpdatePosSystem;