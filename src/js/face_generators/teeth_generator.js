import Entity from 'entity';

import MeshComponent from 'components/render/mesh_component';
import PositionComponent from 'components/transform/position_component';
import MaterialComponent from 'components/render/material_component';
import RotationComponent from 'components/transform/rotation_component';
import NoiseRotationComponent from 'components/noise_rotation_component';
import ScaleComponent from 'components/transform/scale_component';
import AnimInComponent from 'components/transform/anim_in_component';

import AbstractGenerator2D from "face_generators/abstract_generator_2d";
import GeometryData from "data/geometry_data";

import ColourShader from "shaders/material_shaders/colour_shader/colour.shader";

const paper = require("paper");
import * as Three from "three-full";

import ShaderFactoryGroups from "data/shader_factory_groups";
import ShaderFactory from "shaders/shader_factory";

class teethGenerator{

	constructor(){
		this.teethGenerator =  new AbstractGenerator2D({
			generatorFunctions : GeometryData.PUPIL,
			size : {
				randomFactor : 42,
				minimum : 30
			},
			shaderFactory : new ShaderFactory({shaderList : ShaderFactoryGroups.TEETH})
		});

		this.teethGenerator.generate();
	}

	create(options){
		let mouthPath = options.mouthPath;

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
			
			teethEntity.addComponent(new MeshComponent({mesh : this.teethGenerator.getCurrentMesh()}));

			teethEntity.addComponent(new MaterialComponent({
				shader : this.teethGenerator.getCurrentShader(),
				blendMode : {
					equation : Three.AddEquation,
					src : Three.DstAlphaFactor,
					dest : Three.OneMinusSrcAlphaFactor
				}
			}));

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
	}

}

export default teethGenerator;