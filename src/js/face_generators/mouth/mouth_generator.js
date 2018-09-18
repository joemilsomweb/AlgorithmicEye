import Entity from 'entity';

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';
import RotationComponent from 'components/rotation_component';

const mouth = {
	create : function(options){
		let mouthEntity = new Entity();

		mouthEntity.addComponent(new MeshComponent({
			geometry : options.mouthGeometry,
			zOrder : 0,
			center : true,
			globalCompositeOperation : "source-over",
			drawPos : "CENTER"
		}));

		mouthEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y
		}));

		return mouthEntity
	}
}

export default mouth;