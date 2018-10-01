import AbstractGenerator2D from "face_generators/abstract_generator_2d";
import GeometryData from "data/geometry_data";

class HeadGenerator(){
	
	constructor(){

	}

	createHead(){
		const headGenerator = new AbstractGenerator2D(size : {
			generatorFunctions : GeometryData.PUPIL
			randomFactor : 10,
			minimum : 1500
		});

		headGenerator.generate();

		const path = headGenerator.getCurrentPath();

		let headEntity = new Entity();

		headEntity.addComponent(new MeshComponent({mesh : headGenerator.getCurrentMesh()}));
		headEntity.addComponent(new MaterialComponent({
			shader : headGenerator.getCurrentShader(),
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