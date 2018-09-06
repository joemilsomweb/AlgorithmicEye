const BoundsCalculator = {
	
	//create for creating canvas based on size of boundng box
	calculateBounds :function(geometry){
		let maxX = -1;
		let maxY = -1;
		
		for(var point of geometry){
			maxX = point.x > maxX ? point.x : maxX;
			maxY = point.y > maxY ? point.y : maxY;
		}

		return {
			width : maxX,
			height : maxY
		}
	}

};

export default BoundsCalculator;