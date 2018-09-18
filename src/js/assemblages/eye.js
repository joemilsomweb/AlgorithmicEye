import Entity from 'entity';

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';
import RotationComponent from 'components/rotation_component';
import BoundsComponent from 'components/bounds_component';
import NoiseComponent from 'components/random_noise_component';
import MouseFollowComponent from 'components/mouse_follow_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/scale_component';

//can replace with shim....
const paper = require("paper");

//todo place eye at center point...
const eye = {
	create : function(options){
		let eyeEntity = this.setupEye(options.position, options.eyeGeometry);
		let pupilEntity = this.setupPupil(options.position, options.pupilGeometry, eyeEntity.getComponent("MESH"));

		let eyeLashEntities = this.setupEyelashes(
			options.numEyelashes,
			options.eyelashGeometry, 
			eyeEntity.getComponent("POSITION"),  
			eyeEntity.getComponent("MESH")
		);

		return [eyeEntity, pupilEntity].concat(eyeLashEntities);
		// return [eyeEntity].concat(eyeLashEntities);
		// return [eyeEntity];
	},

	setupEye : function(position, eyeGeometry){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({
			geometry : eyeGeometry,
			zOrder : 0,
			center : true,
			globalCompositeOperation : "source-over",
			drawPos : "CENTER"
		}));

		eyeEntity.addComponent(new PositionComponent({
				x : position.x,
				y : position.y
		}));

		return eyeEntity;
	},

	setupPupil : function(position, pupilGeometry, eyeMesh){
		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({
			geometry : pupilGeometry,
			zOrder : 2,
			center : true,
			globalCompositeOperation : "source-atop",
			drawPos : "CENTER"
		}));

		//create pupil at center, refactor later
		pupilEntity.addComponent(new PositionComponent({
				x : position.x,
				y : position.y
		}));

		//need to refactor here
		pupilEntity.addComponent(new BoundsComponent({
			boundsPath : eyeMesh.path
		}));
		pupilEntity.addComponent(new NoiseRotationComponent({
			scale : 10
		}));

		// pupilEntity.addComponent(new MouseFollowComponent());

		// pupilEntity.addComponent(new NoiseComponent());

		return pupilEntity;
	},

	setupEyelashes : function(numEyelashes, eyelashGeometry, eyePos, eyeMesh){
		let eyelashEntities = [];
		let eyelashSep = eyeMesh.path.length/numEyelashes; 

		for(let i = 0; i < numEyelashes; i++){
			let eyelashEntity = new Entity();
			let point = eyeMesh.path.getPointAt(eyelashSep * i);
			
			eyelashEntity.addComponent(new MeshComponent({
				geometry : eyelashGeometry,
				zOrder : 3 + i,
				center : true,
				globalCompositeOperation : "destination-over",
				drawPos : "BOTTOM-CENTER"
			}));

			const tempOffset = eyelashEntity.getComponent("MESH").height/2;

			eyelashEntity.addComponent(new PositionComponent({
				x : point.x + eyePos.x - eyeMesh.width/2,
				y : point.y  + eyePos.y - eyeMesh.height/2
			}));

			//get normal vector
			const normal = eyeMesh.path.getNormalAt(eyelashSep * i);
			const dirVector = new paper.Point(0, -1);
			const angle = dirVector.getDirectedAngle(normal);

			eyelashEntity.addComponent(new RotationComponent({
				rotation : angle * Math.PI / 180
			}));

			eyelashEntity.addComponent(new NoiseRotationComponent({scale : 10}));

			eyelashEntity.addComponent(new ScaleComponent({scale : Math.random() + 0.5}));

			// eyeMesh.debugNormalAtPoint(point, normal);

			eyelashEntities.push(eyelashEntity);
		}

		return eyelashEntities;
	}
}

export default eye;