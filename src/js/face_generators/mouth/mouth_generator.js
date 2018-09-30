import Entity from 'entity';
import TeethGenerator from "face_generators/mouth/2D/teeth_generator_2d";

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import MaterialComponent from 'components/render/material_component';
import RotationComponent from 'components/transform/rotation_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/transform/scale_component';
import AnimInComponent from 'components/transform/anim_in_component';

import MoustacheOutlineGenerator from "face_generators/mouth/2D/facial_hair_outline_generator";
import MoustacheHairGenerator from "face_generators/mouth/2D/facial_hair_generator";

const paper = require("paper");
import * as Three from "three-full";

const mouth = {
	create(options){
		let mouthEntity = new Entity();

		//put mouth generator in here?? or outside to share the generator between multiple instances
		mouthEntity.addComponent(new MeshComponent({mesh : options.mouthGenerator.getCurrentMesh()}));
		mouthEntity.addComponent(new MaterialComponent({
			shader : options.mouthGenerator.getCurrentShader()
		}));

		mouthEntity.addComponent(new PositionComponent({
				x : options.position.x,
				y : options.position.y,
				z : -5
		}));

		let teethEntities = this.setupTeeth(
			options.position,	
			mouthEntity.getComponent("MESH"),
			options.mouthGenerator.getCurrentPath()
		);

		let moustacheEntities = this.setupFacialHair();

		return [mouthEntity].concat(teethEntities, moustacheEntities);
	},

	setupMouthBg : function(){

	},

	setupTeeth(position, mouthMesh, mouthPath){
		TeethGenerator.generate();
		const numTeeth = Math.floor(Math.random() * 30); 

		let teethEntities = [];
		let teethSep = mouthPath.length/numTeeth; 


		for(let i = 0; i < numTeeth; i++){
			let teethEntity = new Entity();
			let point = mouthPath.getPointAt(teethSep * i);

			//quick hack here
			if(point.y > mouthPath.bounds.height/2){
				continue;
			}
			
			teethEntity.addComponent(new MeshComponent({mesh : TeethGenerator.getCurrentMesh()}));


			teethEntity.addComponent(new MaterialComponent({
				shader : TeethGenerator.getCurrentShader(),
				blendMode : {
					equation : Three.AddEquation,
					src : Three.DstAlphaFactor,
					dest : Three.OneMinusSrcAlphaFactor
				}
			}));

			mouthMesh.addChild(teethEntity.getComponent("MESH"));

			teethEntity.addComponent(new PositionComponent({
				x : point.x - mouthPath.bounds.width/2,
				y : -point.y + mouthPath.bounds.height/2,
				z : 0
			}));

			//get normal vector
			const normal = -(mouthPath.getNormalAt(teethSep * i));
			const dirVector = new paper.Point(0, -1);
			const angle = dirVector.getDirectedAngle(normal);

			teethEntity.addComponent(new RotationComponent({
				rotation : 180 * Math.PI / 180
			}));

			teethEntity.addComponent(new NoiseRotationComponent({scale : 3}));

			// teethEntity.addComponent(new ScaleComponent({scale : 1}));
			teethEntity.addComponent(new AnimInComponent());

			teethEntities.push(teethEntity);
		}
 
		return teethEntities;
	},

	setupFacialHair(position){
		MoustacheOutlineGenerator.generate();
		MoustacheHairGenerator.generate();

		const path = MoustacheOutlineGenerator.getCurrentPath();

		let moustacheHairEntities = [];

		let headEntity = new Entity();

		headEntity.addComponent(new MeshComponent({mesh : MoustacheOutlineGenerator.getCurrentMesh()}));
		headEntity.addComponent(new MaterialComponent({
			shader : MoustacheOutlineGenerator.getCurrentShader(),
			blendMode : {
					equation : Three.AddEquation,
					src : Three.OneMinusDstAlphaFactor,
					dest : Three.DstAlphaFactor
			}
		}));

		headEntity.addComponent(new PositionComponent({
				x : 0,
				y : 0,
				z : -1
		}));
		// const numHairs = Math.floor(Math.random() * 20); 
		// const numHairs = 50; 
		// const hairSep = path.length/numHairs;

		// for(let i = 0; i < numHairs; i++){
		// 	let facialHairEntity = new Entity();
		// 	let point = path.getPointAt(hairSep * i);


		// 	facialHairEntity.addComponent(new MeshComponent({mesh : MoustacheHairGenerator.getCurrentMesh()}));
		// 	facialHairEntity.addComponent(new MaterialComponent({
		// 		shader : MoustacheHairGenerator.getCurrentShader(),
		// 		blendMode : {
		// 			equation : Three.AddEquation,
		// 			src : Three.OneMinusDstAlphaFactor,
		// 			dest : Three.DstAlphaFactor
		// 		}
		// 	}));

		// 	facialHairEntity.addComponent(new PositionComponent({
		// 		x : point.x - path.bounds.width/2,
		// 		y : -point.y + path.bounds.height/2,
		// 		z : 0
		// 	}));

		// 	facialHairEntity.addComponent(new RotationComponent({
		// 		rotation : Math.random() * 90 * Math.PI / 180
		// 	}));

		// 	// facialHairEntity.addComponent(new ScaleComponent({scale : {x : 5, y : 5}}));

		// 	moustacheHairEntities.push(facialHairEntity);
		// }

		return headEntity;

	}

}

export default mouth;