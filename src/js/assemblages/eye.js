import Entity from 'entity';

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';
import NoiseComponent from 'components/random_noise_component';

const paper = require("paper");

//todo place eye at center point...
const eye = {
	create : function(options){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({
			geometry : options.eyeGeometry,
			zOrder : 0,
			center : true
		}));

		eyeEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y
		}));

		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({
			geometry : options.pupilGeometry,
			zOrder : 1,
			center : true
		}));

		//create pupil at center, refactor later
		pupilEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y
		}));

		pupilEntity.addComponent(new NoiseComponent());

		let eyeLashEntities = this.setupEyelashes(
			options.eyelashGeometry, 
			eyeEntity.getComponent("POSITION"),  
			eyeEntity.getComponent("MESH")
		);

		return [eyeEntity, pupilEntity].concat(eyeLashEntities);
	},

	setupEyelashes : function(eyelashGeometry, eyePos, eyeMesh){
		let eyelashEntities = [];
		let numEyelashes = 10;
		let eyelashSep = eyeMesh.path.length/numEyelashes; 

		for(let i = 0; i < numEyelashes; i++){
			let eyelashEntity = new Entity();
			let point = eyeMesh.path.getPointAt(eyelashSep * i);
			
			eyelashEntity.addComponent(new PositionComponent({
				x : point.x + eyePos.x - eyeMesh.width/2,
				y : point.y + eyePos.y - eyeMesh.height/2
			}));

			eyelashEntity.addComponent(new MeshComponent({
				geometry : eyelashGeometry,
				zOrder : -1,
				center : true
			}));

			eyelashEntities.push(eyelashEntity);
		}

		//FOR EYELASHES!! YAYAYAY
		// Create a small circle shaped path at the point:
		// for(let i = 0; i < 8; i++){
		// 	let l = path.length/8; 	
		// 	let point = path.getPointAt(l*i);
		// 	let circle = new paper.Path.Circle({
		// 	    center: point,
		// 	    radius: 3,
		// 	    fillColor: 'red'
		// 	});
		// }

		return eyelashEntities;
	}
}

export default eye;