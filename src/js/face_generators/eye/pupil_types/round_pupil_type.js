const RoundPupilType = {
		
		//make it perfectly round for now
		generateOutline : function(){
				const size = {
					width : 30,
					height : 30 
				};

				let outlinePoints = [];
				
				//centre point of eye
				let centerX = size.width/2;
				
				let currentAngle = 0;

				while(currentAngle < 360){
					let x = Math.sin(currentAngle * Math.PI/180) * size.width/2;
					let y = Math.cos(currentAngle * Math.PI/180) * size.height/2;

					x += size.width/2;
					y += size.height/2;
					
					outlinePoints.push({
						x : x,
						y : y
					});
						
					currentAngle += 1;		
				}

			//return geometry...
			return outlinePoints;
		}
};	

export default RoundPupilType;