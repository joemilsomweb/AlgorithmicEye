const RotationSystem = {

	update : function(entities) {
		for(var entity of entities){
			entity.getComponent("MESH").mesh.scale.x = animInScale * scale;
			entity.getComponent("MESH").mesh.scale.y = animInScale * scale;
		}
	}

}

export default RotationSystem;