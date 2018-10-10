const ScaleSystem = {

	update : function(entities) {
		for(var entity of entities){
			if( entity.getComponent("ANIM_IN")){
				 entity.getComponent("ANIM_IN").update();
			}
			if( entity.getComponent("BLINK")){
				 entity.getComponent("BLINK").update();
			}
			let animInScale = entity.getComponent("ANIM_IN") ? entity.getComponent("ANIM_IN").scale : 1;		
			let scaleX = entity.getComponent("SCALE") ? entity.getComponent("SCALE").scale.x : 1;	
			let scaleY = entity.getComponent("SCALE") ? entity.getComponent("SCALE").scale.y : 1;	
			// let blinkScale = entity.getComponent("BLINK") ? entity.getComponent("BLINK").scale : 1;	

			entity.getComponent("MESH").mesh.scale.x = animInScale * scaleX;
			entity.getComponent("MESH").mesh.scale.y = animInScale * scaleY;
		}
	}

}

export default ScaleSystem;