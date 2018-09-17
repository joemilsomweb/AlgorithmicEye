import Entity from 'entity';
//todo change from the name eye assemblage
import EyeAssemblage from "assemblages/eye"

import OutlineFactory from 'eye/outline_types/outline_factory';
import PupilFactory from 'eye/pupil_types/pupil_factory';
import EyelashFactory from 'eye/eyelash_types/eyelash_factory';

//systems
import RenderSystem from "systems/render_system";
import UpdatePosSystem from "systems/update_pos_system";

const canvas = document.getElementById("main_canvas");


function generateEyes(){
	OutlineFactory.generate();
	PupilFactory.generate();
	EyelashFactory.generate();

	// let centerEyeEntities = EyeAssemblage.create({
	// 	eyeGeometry : OutlineFactory.get(), 
	// 	pupilGeometry : PupilFactory.get(),
	// 	eyelashGeometry : EyelashFactory.get(),
	// 	position : {
	// 		x : canvas.width/2,
	// 		y : canvas.height/2
	// 	}
	// });


	let topEyeEntities = EyeAssemblage.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		eyelashGeometry : EyelashFactory.get(),
		position : {
			x : canvas.width/2 - 60,
			y : canvas.height/2 - 300
		}
	});

	//todo rename Eye Assemblage
	//generate canvas within factories instead!! Better idea.... maybe?
	let leftEyeEntities = EyeAssemblage.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		eyelashGeometry : EyelashFactory.get(),
		position : {
			x : 200,
			y : canvas.height/2
		}
	});

	let rightEyeEntities = EyeAssemblage.create({
		eyeGeometry : OutlineFactory.get(), 
		pupilGeometry : PupilFactory.get(),
		eyelashGeometry : EyelashFactory.get(),
		position : {
			x : 712,
			y : canvas.height/2
		}
	});

	

	return leftEyeEntities.concat(rightEyeEntities).concat(topEyeEntities);
	// return centerEyeEntities;
}

let currentFrame = 0;
let entities = generateEyes();

function draw(time){

	// //generate new eyes every 80 frames
	// if(currentFrame % 140 === 0){
	//		entities = generateEyes()
	// }

	UpdatePosSystem.update(entities);
	RenderSystem.render(canvas, entities);

	currentFrame++;
	requestAnimationFrame(draw);
}

//for debug
window.onkeypress = function(e){
	if(e.keyCode == 32){
        entities = generateEyes();
    }
}

draw();