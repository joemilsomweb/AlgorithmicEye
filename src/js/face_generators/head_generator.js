import Entity from 'entity';

import Texture from 'shaders/texture';

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import RotationComponent from 'components/transform/rotation_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/transform/scale_component';
import MaterialComponent from 'components/render/material_component';

import AbstractGenerator2D from "face_generators/abstract_generator_2d";
import GeometryData from "data/geometry_data";

import * as Three from "three-full";


class HeadGenerator{
	
	constructor(){
		this.headGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.PUPIL,
			size : {
				randomFactor : 10,
				minimum : 1500
			}
		});
	}

	create(){
		this.headGenerator.generate();

		const path = this.headGenerator.getCurrentPath();

		let headEntity = new Entity();

		headEntity.addComponent(new MeshComponent({mesh : this.headGenerator.getCurrentMesh()}));
		headEntity.addComponent(new MaterialComponent({
			shader : this.headGenerator.getCurrentShader(),
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

		return headEntity;
	}

	createPimples(){
		// const numHairs = Math.floor(Math.random() * 100); 

		// for(let i = 0; i < numHairs; i++){
		// 	let facialHairEntity = new Entity();

		// 	facialHairEntity.addComponent(new MeshComponent({mesh : MoustacheHairGenerator.getCurrentMesh()}));
		// 	facialHairEntity.addComponent(new MaterialComponent({
		// 		shader : MoustacheHairGenerator.getCurrentShader(),
		// 		blendMode : {
		// 			equation : Three.AddEquation,
		// 			src : Three.DstAlphaFactor,
		// 			dest : Three.OneMinusSrcAlphaFactor
		// 		}
		// 	}));

		// 	facialHairEntity.addComponent(new PositionComponent({
		// 		x : Math.random() * 1000 - 500,
		// 		y : Math.random() * 1000 - 500,
		// 		z : 0
		// 	}));

		// 	headEntity.getComponent("MESH").addChild(facialHairEntity.getComponent("MESH"));

		// 	facialHairEntity.addComponent(new RotationComponent({
		// 		rotation : Math.random() * 90 * Math.PI / 180
		// 	}));

		// 	facialHairEntity.addComponent(new ScaleComponent({scale : {x : Math.random(), y : Math.random()}}));

		// 	moustacheHairEntities.push(facialHairEntity);
		// }

		// return moustacheHairEntities.concat(headEntity);
	}


}

export default HeadGenerator;