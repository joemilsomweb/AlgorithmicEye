(function(){
	
	var ShaderLoader = {

	 	loadShaders(vertexPath, fragmentPath, success){
				var vertexShader;
				var fragmentShader;

				var self = this;

				var onVertexLoadSuccess = function(result){
					vertexShader = result;
					self.loadData(fragmentPath, onFragmentLoadSuccess, self.onErr);
				}

				var onFragmentLoadSuccess = function(result){
					fragmentShader = result;
					success(vertexShader, fragmentShader);
				}

				self.loadData(vertexPath, onVertexLoadSuccess, self.onErr);

		},

		loadData(path, success, error){
	    	var xhr = new XMLHttpRequest();
	    	xhr.onreadystatechange = function()
	    	{
		        if (xhr.readyState === XMLHttpRequest.DONE) {
		            if (xhr.status === 200) {
		                if (success)
		                    success(xhr.responseText);
		            } else {
		                if (error)
		                    error(xhr);
		            }
	        }
	    }
	    	xhr.open("GET", path, true);
	    	xhr.send();
		},

		onErr(error){
			console.error("Error loading shader ", error);
		}

	}




	window.ShaderLoader = ShaderLoader;

})();