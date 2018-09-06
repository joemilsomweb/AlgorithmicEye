//utility class to handle webgl boilerplate
(function(){
    var glHelper = {
    	
      createProgram : function(){

    	},
    	
      createPositionBuffer : function(){

    	},

    	compileShader : function(glContext, shaderText, shaderType){
			   var shader = glContext.createShader(shaderType);
	  		glContext.shaderSource(shader, shaderText);
	  		glContext.compileShader(shader);

			if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
    			console.error('An error occurred compiling the shaders: ' + glContext.getShaderInfoLog(shader));
    			glContext.deleteShader(shader);
    			return null;
  			}

	  		return shader;
    	},

      initTexture : function(glContext, image){
          var texture = glContext.createTexture();

          var level = 0;
          var internalFormat = glContext.RGBA;
          var border = 0;
          var srcFormat = glContext.RGBA;
          var srcType = glContext.UNSIGNED_BYTE;
          
          //wonder if this can introduce bad memory usage...
          glContext.bindTexture(glContext.TEXTURE_2D, texture);
          glContext.texImage2D(glContext.TEXTURE_2D, level, internalFormat,
                        srcFormat, srcType, image);

          if (this.isPowerOf2(image.width) && this.isPowerOf2(image.height)) {
             glContext.generateMipmap(glContext.TEXTURE_2D);
          } else {
             glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
             glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
             glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
          } 

          return texture;
      },

      generateFallbackTexture : function(glContext){
        var texture = glContext.createTexture();
        glContext.bindTexture(glContext.TEXTURE_2D, texture);

        var level = 0;
        var internalFormat = glContext.RGBA;
        var width = 1;
        var height = 1;
        var border = 0;
        var srcFormat = glContext.RGBA;
        var srcType = glContext.UNSIGNED_BYTE;

        //generate backup texture while loading
        var pixel = new Uint8Array([0, 0, 255, 255]);
        glContext.texImage2D(glContext.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

        return texture;
      },

    	loadTexture : function(glContext, src){
    	  var texture = generateFallbackTexture(glContext);

  			var image = new Image();
  			var self = this;

  			image.onload = function(){
            texture = self.initTexture(glContext, image, texture);
  			};

  			image.src = src;

    		return texture;
    	},

    isPowerOf2 : function(value) {
  			return (value & (value - 1)) == 0;
		},

		createAttributeBuffer : function(glContext, data, numComponents, type, attribPos){
			//create buffer
			var buffer = glContext.createBuffer();
			//bind to an array buffer
  			glContext.bindBuffer(glContext.ARRAY_BUFFER, buffer);
  			//assign data to buffer
  			glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(data), glContext.STATIC_DRAW);

	 		glContext.enableVertexAttribArray(attribPos);

  			glContext.vertexAttribPointer(
				attribPos,
				numComponents,
				type,
				false,
				0,
				0
			);

  			return buffer;
		}
  };

  window.JRM_glHelper = glHelper;

})();