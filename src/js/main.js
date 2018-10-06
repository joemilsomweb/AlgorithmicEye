import Entity from 'entity';
  
//systems
import ThreeRenderSystem from "systems/three_render_system";
import UpdatePosSystem from "systems/update_pos_system";
import ScaleSystem from "systems/scale_system";
import WebglPostProcessSystem from "systems/webgl_postprocess_system";

import CanvasScene from "canvas_scene";
import CreatureGenerator from "face_generators/creature_generator";


let creature = new CreatureGenerator();
let entities = creature.entities;
let currentFrame = 0;

const canvas = document.getElementById("main_canvas");
let scene = new CanvasScene({canvas : canvas});
scene.setRandomBackground();


function draw(time){
	// AnimationSystem.update(entities);
	ScaleSystem.update(entities);
	UpdatePosSystem.update(entities);
	ThreeRenderSystem.render(entities, scene);
	WebglPostProcessSystem.render(scene);

	currentFrame++;
	requestAnimationFrame(draw);
}

//for debug
window.onkeypress = function(e){
	if(e.keyCode === 32){
		let creature = new CreatureGenerator();
        entities = creature.entities;
        scene.setRandomBackground();
    }

    if(e.keyCode === 99){
        scene.setRandomBackground();
    }
}

draw();