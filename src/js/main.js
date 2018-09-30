import Entity from 'entity';

import EyeGenerator from "face_generators/eye/eye_generator";
import MouthGenerator from "face_generators/mouth/mouth_generator";

import EyeballGenerator from 'face_generators/eye/2D/eyeball_generator_2d';
import PupilGenerator from 'face_generators/eye/2D/pupil_generator_2d';
import EyelashGenerator from 'face_generators/eye/2D/eyelash_generator_2d';

import MouthOutlineGenerator from 'face_generators/mouth/2D/mouth_generator_2d';
  
//systems
import ThreeRenderSystem from "systems/three_render_system";
import UpdatePosSystem from "systems/update_pos_system";
import ScaleSystem from "systems/scale_system";
import WebglPostProcessSystem from "systems/webgl_postprocess_system";

import * as Three from "three-full";

const canvas = document.getElementById("main_canvas");

function generateEyes(){
	EyeballGenerator.generate();
	PupilGenerator.generate();
	EyelashGenerator.generate();

	let numEyelashes = Math.floor(Math.random() * 10) + 4;

	//put in eye generator class
	let leftEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : -300,
			y : 75
		},
		numEyelashes : numEyelashes
	});

	let rightEyeEntities = EyeGenerator.create({
		eyeballGenerator : EyeballGenerator, 
		pupilGenerator : PupilGenerator,
		eyelashGenerator : EyelashGenerator,
		position : {
			x : 300,
			y : 75
		},
		numEyelashes : numEyelashes
	});

	// let topEyeEntities = EyeGenerator.create({
	// 	eyeballGenerator : EyeballGenerator, 
	// 	pupilGenerator : PupilGenerator,
	// 	eyelashGenerator : EyelashGenerator,
	// 	position : {
	// 		x : 0,
	// 		y : 140
	// 	},
	// 	numEyelashes : numEyelashes
	// });

	return leftEyeEntities.concat(rightEyeEntities);
}

function generateMouth(){
	MouthOutlineGenerator.generate();
	return MouthGenerator.create({
		mouthGenerator : MouthOutlineGenerator,
		position : {
			x : 0,
			y : -220
		}
	});
}

let currentFrame = 0;
let entities = generateEyes();
entities = entities.concat(generateMouth());

setRandomBackground();


//todo create class here
const width = 1280;
const height = 800;
canvas.width = width;
canvas.height = height;

let ThreeRenderer = new Three.WebGLRenderer({canvas : canvas, alpha : true, antialias : false});

let ThreeScene = new Three.Scene();
ThreeScene.scale.x = 0.85;
ThreeScene.scale.y = 0.85;
let ThreeCamera = new Three.OrthographicCamera(width/-2, width/2, height/2, height/-2, 0, 1000);
let ThreeRenderTarget = new Three.WebGLRenderTarget(window.innerWidth, window.innerHeight);

// ThreeRenderer.setSize(1280, 800);
canvas.style.height = "";


function draw(time){
	// AnimationSystem.update(entities);
	ScaleSystem.update(entities);
	UpdatePosSystem.update(entities);
	ThreeRenderSystem.render(entities, ThreeRenderer, ThreeScene, ThreeCamera, ThreeRenderTarget);
	WebglPostProcessSystem.render(ThreeRenderer, ThreeRenderTarget);

	currentFrame++;
	requestAnimationFrame(draw);
}

//for debug
window.onkeypress = function(e){
	if(e.keyCode === 32){
        entities = generateEyes();
        entities = entities.concat(generateMouth());
        setRandomBackground();
    }

    if(e.keyCode === 99){
        setRandomBackground();
    }

}

function setRandomBackground(){
	document.body.style.background = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," +Math.random() * 255 + ")" ;
}

draw();