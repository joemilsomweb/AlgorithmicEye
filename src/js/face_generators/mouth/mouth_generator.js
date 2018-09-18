import Entity from 'entity';
import TeethFactory from "face_generators/mouth/teeth_factory";

import MeshComponent from 'components/mesh_component';
import PositionComponent from 'components/position_component';
import RotationComponent from 'components/rotation_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/scale_component';

const paper = require("paper");

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

		TeethFactory.generate();

		const numTeeth = Math.floor(Math.random() * 30); 
		let teethEntities = this.setupTeeth(numTeeth, TeethFactory.get(), mouthEntity.getComponent("POSITION"),  mouthEntity.getComponent("MESH"));
		return [mouthEntity].concat(teethEntities);
	},

	setupTeeth : function(numTeeth, teethGeometry, mouthPos, mouthMesh){
		let teethEntities = [];
		let teethSep = mouthMesh.path.length/numTeeth; 

		for(let i = 0; i < numTeeth; i++){
			let teethEntity = new Entity();
			let point = mouthMesh.path.getPointAt(teethSep * i);
			if(point.y > mouthMesh.path.bounds.height/2){
				continue;
			}
			
			teethEntity.addComponent(new MeshComponent({
				geometry : teethGeometry,
				zOrder : 3 + i,
				center : true,
				globalCompositeOperation : "source-atop",
				drawPos : "BOTTOM-CENTER"
			}));

			const tempOffset = teethEntity.getComponent("MESH").height/2;

			teethEntity.addComponent(new PositionComponent({
				x : point.x + mouthPos.x - mouthMesh.width/2,
				y : point.y  + mouthPos.y - mouthMesh.height/2
			}));

			//get normal vector
			const normal = (mouthMesh.path.getNormalAt(teethSep * i));
			const dirVector = new paper.Point(0, -1);
			const angle = dirVector.getDirectedAngle(normal);

			teethEntity.addComponent(new RotationComponent({
				rotation : 180 * Math.PI / 180
			}));

			teethEntity.addComponent(new NoiseRotationComponent({scale : 3}));

			teethEntity.addComponent(new ScaleComponent({scale :  0.5}));

			teethEntities.push(teethEntity);
		}

		return teethEntities;
	}

}

export default mouth;