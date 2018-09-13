import Entity from 'entity';

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';
import NoiseComponent from 'components/random_noise_component';

//todo place eye at center point...
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
				x : options.position.x,
				y : options.position.y
		}));

		pupilEntity.addComponent(new NoiseComponent());

		return [eyeEntity, pupilEntity];
	}
}

export default eye;