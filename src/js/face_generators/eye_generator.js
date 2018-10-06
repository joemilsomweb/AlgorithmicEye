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

import AbstractGenerator2D from "face_generators/abstract_generator_2d";
import GeometryData from "data/geometry_data";

const paper = require("paper");
import * as Three from "three-full";

class eye{
	constructor(){
		this.eyeballGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.EYEBALL,
			size : {
				randomFactor : 300,
				minimum : 150
			} 
		});

		this.pupilGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.PUPIL,
			size : {
				randomFactor : 20,
				minimum : 60
			} 
		});

		this.eyelashGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.EYELASH,
			size : {
				randomFactor : 20,
				minimum : 60
			} 
		});

		this.eyeballGenerator.generate();
	 	this.pupilGenerator.generate();
		this.eyelashGenerator.generate();
	}

	create(options){
		let eyeEntity = this.setupEye();
		let pupilEntity = this.setupPupil();

		// let eyeLashEntities = this.setupEyelashes(
		// 	options.numEyelashes, 
		// 	options.eyeballGenerator.getCurrentPath()
		// );

		let eyelashEntities = this.setupEyelashes(
			10, 
			this.eyeballGenerator.getCurrentPath()
		);

		//setup parent child relationships
		let eyeMesh = eyeEntity.getComponent("MESH");
		for(let e of eyelashEntities){
			eyeMesh.addChild(e.getComponent("MESH"));
		}
		eyeMesh.addChild(pupilEntity.getComponent("MESH"));

		return [eyeEntity, pupilEntity].concat(eyelashEntities);
	}

	setupEye(position){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({mesh : this.eyeballGenerator.getCurrentMesh()}));
		eyeEntity.addComponent(new MaterialComponent({
			shader : this.eyeballGenerator.getCurrentShader()
		}));
		eyeEntity.addComponent(new PositionComponent({
				x : 0,
				y : 100,
				z : -2
		}));
		eyeEntity.addComponent(new BlinkComponent());

		return eyeEntity;
	}

	setupPupil(){
		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({mesh : this.pupilGenerator.getCurrentMesh()}));
		pupilEntity.addComponent(new MaterialComponent({
			shader : this.pupilGenerator.getCurrentShader(),
			blendMode : {
				equation : Three.AddEquation,
				src : Three.DstAlphaFactor,
				dest : Three.OneMinusSrcAlphaFactor
			}
		}));

		pupilEntity.addComponent(new PositionComponent({
				x : 0,
				y : 0,
				z : 0
		}));

		pupilEntity.addComponent(new NoiseRotationComponent({
			scale : 10
		}));

		pupilEntity.addComponent(new PupilMovementComponent());

		return pupilEntity;
	}

	setupEyelashes(numEyelashes, eyePath){
		let eyelashEntities = [];
		let eyelashSep = eyePath.length/numEyelashes; 

		for(let i = 0; i < numEyelashes; i++){
			let eyelashEntity = new Entity();
			let point = eyePath.getPointAt(eyelashSep * i);
			
			eyelashEntity.addComponent(new MeshComponent({mesh : this.eyelashGenerator.getCurrentMesh()}));
			eyelashEntity.addComponent(new MaterialComponent({
				shader : this.eyelashGenerator.getCurrentShader(),
				blendMode : {
					equation : Three.AddEquation,
					src : Three.OneMinusDstAlphaFactor,
					dest : Three.DstAlphaFactor
				}
			}));

			//get normal vector
			const normal = eyePath.getNormalAt(eyelashSep * i);
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
				z : 0
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