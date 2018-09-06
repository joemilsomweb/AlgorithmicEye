"use strict";

(function(){

	//todo put in data file
	var SHAPE = {
	    	SQUARE : {
	    		vertices : {
	    			numComponents : 2,
	    			data : [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0],
	    			type : "FLOAT"
	    		},
	    		uv : {
	    			numComponents : 2,
	    			data : [1.0, 1.0, 0, 1.0, 1.0, 0, 0, 0],
	    			type : "FLOAT"
	    		}
	    	}
	 };


	const WebGlCanvas = class{

		constructor(options){
			this.vertexShader = options.vertexShader;
			this.fragmentShader = options.fragmentShader;
			this.image = options.image;
			this.currentTime = 0;

			this.setupCanvas();

			ShaderLoader.loadShaders(this.vertexShader, this.fragmentShader, this.onShaderLoad.bind(this));
		}

		setupCanvas(){
			this.canvas = document.createElement("canvas");
			this.canvas.width = 512;
			this.canvas.height = 512;

			this.context = this.canvas.getContext("webgl");

			this.canvas.style.position = "absolute";
			this.canvas.style.top = "0";
			this.canvas.style.left = "0";
		}

		onShaderLoad(vertexShader, fragmentShader){
			this.programInfo = this.generateShaderProgram(vertexShader, fragmentShader);
			
			//create buffer for square
			var sqVData = SHAPE.SQUARE.vertices;
			var positionBuffer = JRM_glHelper.createAttributeBuffer(this.context, 
				sqVData.data, 
				sqVData.numComponents, 
				this.context[sqVData.type], 
				this.programInfo.attribLocations.position
				);
			
			//buffer for uvs
			var sqTexData = SHAPE.SQUARE.uv;
			var textureBuffer = JRM_glHelper.createAttributeBuffer(
				this.context, 
				sqVData.data, 
				sqVData.numComponents, 
				this.context[sqVData.type], 
				this.programInfo.attribLocations.uv);

			this.context.enable(this.context.DEPTH_TEST);          
	  		this.context.depthFunc(this.context.LEQUAL); 

	  		this.context.enableVertexAttribArray(this.programInfo.attribLocations.position);
			this.context.enableVertexAttribArray(this.programInfo.attribLocations.uv);
			this.context.useProgram(this.programInfo.program);

	  		// var texture = JRM_glHelper.loadTexture(this.context, "images/norm2.jpg");
	  		var texture = JRM_glHelper.initTexture(this.context, this.image);
			
		}

		generateShaderProgram(vertShader, fragmentShader){
			var vertShader = JRM_glHelper.compileShader(this.context, vertShader, this.context.VERTEX_SHADER);
	  		var fragShader = JRM_glHelper.compileShader(this.context, fragmentShader, this.context.FRAGMENT_SHADER);

			//create the program to use the shaders
	  	    var program = this.context.createProgram();
	  		this.context.attachShader(program, vertShader);
	  		this.context.attachShader(program, fragShader);
	  		this.context.linkProgram(program);
	  		this.context.useProgram(program);

	  		this.context.clearColor(0, 0, 0, 1);
			this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);

			return {
			    program: program,
			    attribLocations: {
			      position: this.context.getAttribLocation(program, 'position'),
			      uv: this.context.getAttribLocation(program, 'uv')
			    },
			    uniformLocations: {
			      time: this.context.getUniformLocation(program, 'iTime'),
			      resolution: this.context.getUniformLocation(program, 'iResolution'),
			      mouse: this.context.getUniformLocation(program, 'iMouse'),
			      mainTex: this.context.getUniformLocation(program, 'texture')
			    }
	 		};
		}

		draw(){
			if(!this.programInfo){
				return;
			}

			//this sucks...
			//rename it to update texture
	  		JRM_glHelper.initTexture(this.context, this.image);

			this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);

			//set uniforms
			// this.context.uniform1f(this.programInfo.uniformLocations.time, time/1000.);
			this.context.uniform1f(this.programInfo.uniformLocations.time, this.currentTime);
			this.context.uniform2fv(this.programInfo.uniformLocations.resolution, [this.canvas.width, this.canvas.height]);
			this.context.uniform4fv(this.programInfo.uniformLocations.mouse, [0, 0, 0, 0]);
			this.context.uniform1i(this.programInfo.uniformLocations.texture, 0);
			
			//quite cool, dont need to set all the vertices!!
			var offset = 0;
    		var vertexCount = 4;
			this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);

			this.currentTime+=0.1;
		}

	}

	window.WebGlCanvas = WebGlCanvas	
	
})();