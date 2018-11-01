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

class EyelashGenerator{
	constructor(){
		this.eyelashGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.EYELASH,
			size : {
				randomFactor : 20,
				minimum : 60
			} 
		});

		this.eyelashGenerator.generate();
	}

	create(options){

		let eyelashEntities = this.setupEyelashes(
			options.numEyelashes, 
			options.eyeballPath
		);

		return eyelashEntities;
	}

	

	setupEyelashes(numEyelashes, eyePath){
		let eyelashEntities = [];
		let eyelashSep = eyePath.length/numEyelashes; 

		for(let i = 0; i < numEyelashes; i++){
			let eyelashEntity = new Entity();
			let point = eyePath.getPointAt(eyelashSep * i);
			
			eyelashEntity.addComponent(new MeshComponent({mesh : this.eyelashGenerator.getCurrentMesh(), renderOrder : 2}));
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

export default EyelashGenerator;