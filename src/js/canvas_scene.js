import * as Three from "three-full";

class CanvasScene{
	
	constructor(options){
		this.canvas = options.canvas;

		const width = 1280;
		const height = 800;
		this.canvas.width = width;
		this.canvas.height = height;

		this.renderer = new Three.WebGLRenderer({canvas : this.canvas, alpha : true, antialias : false});

		this.scene = new Three.Scene();
		this.scene.scale.x = 0.5;
		this.scene.scale.y = 0.5;
		this.camera = new Three.OrthographicCamera(width/-2, width/2, height/2, height/-2, 0, 1000);
		this.renderTarget = new Three.WebGLRenderTarget(window.innerWidth, window.innerHeight);

		this.canvas.style.height = "";
	}

	render(){

	}

	setRandomBackground(){
		document.body.style.background = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," +Math.random() * 255 + ")" ;
	}
}

export default CanvasScene;