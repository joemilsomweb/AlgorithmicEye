//function to be loaded into code
function requireFromDirectory(){
		let requiredModules = [];
		let req = require.context(DIR_NAME, true, /^(.*\_data\.(js$))[^.]*$/);
		req.keys().forEach(function(key){
			//todo check if array
    		requiredModules.push(req(key).default);
		});	

		return requiredModules;
}

module.exports = function(content) {
	//look for instances where we need to create a dynamic require 
	let regex = /{OUTLINE_DATA_LOADER.*}/g
	let res = content.match(regex);

	let newContent = content;
	//Code needs to have form {OUTLINE_DATA_LOADER?directory="path/to/file"};
	if(res){
		for(let match of res){
			let matchString = match.substring(1, match.length-1);
			//get the directory name
			let queryString = matchString.split('?')[1];
			let dirName = queryString.split('=')[1]

			let loaderFuncString = requireFromDirectory.toString();
			loaderFuncString = loaderFuncString.replace("DIR_NAME", dirName);

			newContent = newContent.replace(match, "(" + loaderFuncString + ")()");	
		}
	}


  return newContent;
};