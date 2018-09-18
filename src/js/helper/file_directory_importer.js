const FileDirectoryImporter = {
	
	requireFromDirectory : function(dirName){
		let requiredModules = [];
		let req = require.context(dirName, true, /^(.*\_data\.(js$))[^.]*$/);
		req.keys().forEach(function(key){
			//todo check if array
    		requiredModules.push(req(key).default);
		});	

		return requiredModules;
	}

};

export default FileDirectoryImporter;