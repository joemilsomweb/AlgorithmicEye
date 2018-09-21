let generatorFunctions = {OUTLINE_DATA_LOADER?directory="data/eyelash_geometry"};

const MoustacheFactory = {
	generate : function(){
		const generator = generatorFunctions[Math.floor(Math.random()*generatorFunctions.length)];
		if(Array.isArray(generator)){
			const s = Math.random() * 200 + 200;
			
			this.geometry = generator.map((point) => {
				return {x : (point.x + 0.1) * s, y : (point.y + 0.1) * s}
			});
		}
		else{			
			this.geometry = generator.generateOutline();
		}	
	},

	get : function(){
		return this.geometry;
	}

};

export default MoustacheFactory;

