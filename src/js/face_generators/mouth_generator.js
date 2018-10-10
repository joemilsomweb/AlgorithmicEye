import Entity from 'entity';

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import MaterialComponent from 'components/render/material_component';

import AbstractGenerator2D from "face_generators/abstract_generator_2d";
import GeometryData from "data/geometry_data";

const paper = require("paper");
import * as Three from "three-full";

class mouthGenerator{

	constructor(){
		this.mouthGenerator = new AbstractGenerator2D({
			generatorFunctions : GeometryData.MOUTH,
			size : {
				randomFactor : 150,
				minimum : 150
			} 
		});

		this.mouthGenerator.generate();
	}

	create(position){
		let mouthEntity = this.setupMouth(position);
		return mouthEntity;
	}

	setupMouth(position){
		let mouthEntity = new Entity();

		mouthEntity.addComponent(new MeshComponent({mesh : this.mouthGenerator.getCurrentMesh()}));
		mouthEntity.addComponent(new MaterialComponent({
			shader : this.mouthGenerator.getCurrentShader(),
			blendMode : {
					equation : Three.AddEquation,
					src : Three.OneMinusDstAlphaFactor,
					dest : Three.SrcAlphaFactor
			}
		}));

		mouthEntity.addComponent(new PositionComponent({
				x : position.x,
				y : position.y,
				z : 0
		}));

		return mouthEntity;
	}

}

export default mouthGenerator;