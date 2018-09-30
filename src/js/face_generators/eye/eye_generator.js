//todo rename this class. It is not a Generator!! the generators are 
//the outline factorys. These just assemble the entities

import Entity from 'entity';

import Texture from 'shaders/texture';

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import RotationComponent from 'components/transform/rotation_component';
import BoundsComponent from 'components/bounds_component';
import NoiseComponent from 'components/random_noise_component';
import MouseFollowComponent from 'components/mouse_follow_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/transform/scale_component';
import AnimInComponent from 'components/transform/anim_in_component';
import BlinkComponent from 'components/blink_component';
import MaterialComponent from 'components/render/material_component';
import PupilMovementComponent from 'components/timeline_anim_component';

//can replace with shim....
const paper = require("paper");
import * as Three from "three-full";


//todo place eye at center point...
const eye = {
	create : function(options){
		let eyeEntity = this.setupEye(options.position, options.eyeballGenerator);
		let pupilEntity = this.setupPupil(options.position, options.pupilGenerator, eyeEntity.getComponent("MESH"));

		let eyeLashEntities = this.setupEyelashes(
			options.position,	
			options.eyelashGenerator, 
			options.numEyelashes, 
			eyeEntity.getComponent("MESH"),
			options.eyeballGenerator.getCurrentPath()
		);

		return [eyeEntity, pupilEntity].concat(eyeLashEntities);
	},

	setupEye : function(position, eyeballGenerator){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({mesh : eyeballGenerator.getCurrentMesh()}));
		//hmmm get current shader is a bit bad. maybe each generator has its own shader factory
		eyeEntity.addComponent(new MaterialComponent({
			shader : eyeballGenerator.getCurrentShader()
		}));
		eyeEntity.addComponent(new PositionComponent({
				x : position.x,
				y : position.y,
				z : -2
		}));
		eyeEntity.addComponent(new BlinkComponent());

		// const s = 0.5;
		// const scale = {x : 1, y : s};
		// eyeEntity.addComponent(new ScaleComponent({scale : scale}));

		return eyeEntity;
	},

	setupPupil : function(position, pupilGenerator, eyeMesh){
		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({mesh : pupilGenerator.getCurrentMesh()}));
		pupilEntity.addComponent(new MaterialComponent({
			shader : pupilGenerator.getCurrentShader(),
			blendMode : {
				equation : Three.AddEquation,
				src : Three.DstAlphaFactor,
				dest : Three.OneMinusSrcAlphaFactor
			}
		}));

		//create pupil at center, refactor later
		pupilEntity.addComponent(new PositionComponent({
				x : 0,
				y : 0,
				z : 0
		}));

		pupilEntity.addComponent(new NoiseRotationComponent({
			scale : 10
		}));
		// pupilEntity.addComponent(new BoundsComponent({}));

		pupilEntity.addComponent(new PupilMovementComponent());


		eyeMesh.addChild(pupilEntity.getComponent("MESH"));
		// pupilEntity.addComponent(new MouseFollowComponent());
		// pupilEntity.addComponent(new NoiseComponent());

		return pupilEntity;
	},

	//how to simplify this further
	setupEyelashes : function(position, eyelashGenerator, numEyelashes, eyeMesh, eyePath){
		let eyelashEntities = [];
		let eyelashSep = eyePath.length/numEyelashes; 

		for(let i = 0; i < numEyelashes; i++){
			let eyelashEntity = new Entity();
			let point = eyePath.getPointAt(eyelashSep * i);
			
			eyelashEntity.addComponent(new MeshComponent({mesh : eyelashGenerator.getCurrentMesh()}));
			eyelashEntity.addComponent(new MaterialComponent({
				shader : eyelashGenerator.getCurrentShader(),
				blendMode : {
					equation : Three.AddEquation,
					src : Three.OneMinusDstAlphaFactor,
					dest : Three.DstAlphaFactor
				}
			}));

			eyeMesh.addChild(eyelashEntity.getComponent("MESH"));

			//get normal vector
			const normal = eyePath.getNormalAt(eyelashSep * i);
			//todo, refactor!!
			normal.x = -normal.x;
			normal.y =  normal.y;
			const dirVector = new paper.Point(0, -1);
			const angle = dirVector.getDirectedAngle(normal);

			eyelashEntity.addComponent(new RotationComponent({
				rotation : angle * Math.PI / 180
			}));

			//todo try to refactor this
			eyelashEntity.addComponent(new PositionComponent({
				x : point.x - eyePath.bounds.width/2,
				y : -point.y + eyePath.bounds.height/2,
				z : 1
			}));

			eyelashEntity.addComponent(new NoiseRotationComponent({scale : 10}));

			const s = Math.random() + 0.5;
			const scale = {x : s, y : s};
			eyelashEntity.addComponent(new ScaleComponent({scale : scale}));
			eyelashEntity.addComponent(new AnimInComponent());

			eyelashEntities.push(eyelashEntity);
		}

		return eyelashEntities;
	}
}

export default eye;