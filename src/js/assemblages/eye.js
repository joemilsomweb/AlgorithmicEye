import Entity from 'entity';

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';

const eye = {
	create : function(options){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({
			geometry : options.eyeGeometry
		}));

		eyeEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y
		}));

		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({
			geometry : options.pupilGeometry
		}));
		
		const eyeMesh = eyeEntity.components["MESH"];
		const pupilMesh = pupilEntity.components["MESH"];

		//create pupil at center, refactor later
		pupilEntity.addComponent(new PositionComponent({
				x : options.position.x + eyeMesh.bounds.width/2 - pupilMesh.bounds.width/2,
				y : options.position.y + eyeMesh.bounds.height/2 - pupilMesh.bounds.width/2
		}));

		return [eyeEntity, pupilEntity];
	}
}

export default eye;