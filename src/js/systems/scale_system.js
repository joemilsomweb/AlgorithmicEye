const ScaleSystem = {

	update : function(entities) {
		for(var entity of entities){
			if( entity.getComponent("ANIM_IN")){
				 entity.getComponent("ANIM_IN").update();
			}
			let animInScale = entity.getComponent("ANIM_IN") ? entity.getComponent("ANIM_IN").scale : 1;		
			let scale = entity.getComponent("SCALE") ? entity.getComponent("SCALE").scale : 1;	

			entity.getComponent("MESH").mesh.scale.x = animInScale * scale;
			entity.getComponent("MESH").mesh.scale.y = animInScale * scale;
		}
	}

}

export default ScaleSystem;