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

import ShaderFactoryGroups from "data/shader_factory_groups";
import ShaderFactory from "shaders/shader_factory";

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

		this.eyeballGenerator.generate();
	}

	create(options){
		let eyeEntity = this.setupEye(options.position, options.maxWidth);

		return eyeEntity;		
	}

	setupEye(position, maxWidth){
		let eyeEntity = new Entity();

		eyeEntity.addComponent(new MeshComponent({mesh : this.eyeballGenerator.getCurrentMesh(), renderOrder : 0}));
		eyeEntity.addComponent(new MaterialComponent({
			shader : this.eyeballGenerator.getCurrentShader(),
			blendMode : {
					equation : Three.AddEquation,
					src : Three.OneFactor,
					dest : Three.OneMinusSrcAlphaFactor
			}
		}));
		eyeEntity.addComponent(new PositionComponent({
				x : position.x,
				y : position.y,
				z : 0
		}));

		//calculate eye width based on the section of the eye
		const eyeWidth = this.eyeballGenerator.getCurrentPath().bounds.width;
		let scale = eyeWidth > maxWidth ? maxWidth / eyeWidth : 1;

		eyeEntity.addComponent(new ScaleComponent({
				scale : {
					x : scale, y : scale
				}
		}));
		eyeEntity.addComponent(new BlinkComponent());

		return eyeEntity;
	}
}

export default eye;