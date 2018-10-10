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

class Pupil{
	constructor(){
		this.pupilGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.PUPIL,
			size : {
				randomFactor : 20,
				minimum : 60
			} 
		});

	 	this.pupilGenerator.generate();
	}

	create(options){
		let pupilEntity = this.setupPupil();

		return pupilEntity;
	}

	setupPupil(){
		let pupilEntity = new Entity();

		pupilEntity.addComponent(new MeshComponent({mesh : this.pupilGenerator.getCurrentMesh(), renderOrder : 1}));
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
}

export default Pupil;