import Entity from 'entity';
import TeethGenerator from "face_generators/mouth/2D/teeth_generator_2d";

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import MaterialComponent from 'components/render/material_component';
import RotationComponent from 'components/transform/rotation_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/transform/scale_component';
import AnimInComponent from 'components/transform/anim_in_component';

const paper = require("paper");

const mouth = {
	create : function(options){
		let mouthEntity = new Entity();

		mouthEntity.addComponent(new MeshComponent({mesh : options.mouthGenerator.getCurrentMesh()}));
		mouthEntity.addComponent(new MaterialComponent({
			shader : options.mouthGenerator.getCurrentShader()
		}));

		mouthEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y,
				z : 0
		}));

		TeethGenerator.generate();

		// const numTeeth = Math.floor(Math.random() * 30); 
		// let teethEntities = this.setupTeeth(numTeeth, TeethFactory.get(), mouthEntity.getComponent("POSITION"),  mouthEntity.getComponent("MESH"));

		// let moustacheEntities = this.setupFacialHair(options.position);

		return [mouthEntity];//.concat(teethEntities);
	},

	setupTeeth : function(numTeeth, teethGeometry, mouthPos, mouthMesh){

		let teethEntities = [];
		let teethSep = mouthMesh.path.length/numTeeth; 

		for(let i = 0; i < numTeeth; i++){
			let teethEntity = new Entity();
			let point = mouthMesh.path.getPointAt(teethSep * i);
			//quick hack here
			if(point.y > mouthMesh.path.bounds.height/2){
				continue;
			}
			
			teethEntity.addComponent(new MeshComponent({
				geometry : teethGeometry,
				zOrder : 3 + i,
				center : true,
				globalCompositeOperation : "source-atop",
				drawPos : "BOTTOM-CENTER",
				color : "white"
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
			teethEntity.addComponent(new AnimInComponent());

			teethEntities.push(teethEntity);
		}

		return teethEntities;
	},

	setupFacialHair : function(position){
		MoustacheFactory.generate();
		FacialHairFactory.generate();

		let moustacheHairEntities = [];

		const numHairs = Math.floor(Math.random() * 80); 

		for(let i = 0; i < numHairs; i++){
			let facialHairEntity = new Entity();
			// let point = MoustacheFactory.get().path.getPointAt(teethSep * i);


			moustacheHairEntities.push(facialHairEntity);
		}

	}

}

export default mouth;