const AnimationSystem = {

	update : function(entities) {
		for(var entity of entities){
			const animInComp = entity.getComponent("ANIM_IN");		
			if(animInComp){
				animInComp.update();
			}
		}
	}

}

export default AnimationSystem;