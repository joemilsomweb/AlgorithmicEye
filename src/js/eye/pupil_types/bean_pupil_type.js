const BeanPupilType = {
		
		generateOutline : function(options){
				const size = {
					width : 70,
					height : 70 
				};

				let outlinePoints = [];
				
				let currentAngle = 0;

				//draw sin wave at bottom
				for(var i = 0; i < size.width; i++){
					let point = {
						x : i,
						y : Math.sin(i / size.width * (3.14 * 3)) * 6 + 50
					};

					outlinePoints.push(point);
				}

				//draw top
				for(var i = 0; i < 90; i++){
					
				}



			return outlinePoints;
		}
};	

export default BeanPupilType;