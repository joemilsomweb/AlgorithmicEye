var selection = app.activeDocument.selection;

//one file per layer doesn't work yet, implement. also 
var file = File.saveDialog('Export data as points, one file per layer', 'Javascript:*.js');
file.open('w');

// iterate through each selected item
for (var i = 0; i < selection.length; i++) {
  var item = selection[i];

  // check if selection is a PathItem
  if (item.typename === "PathItem") {

    // every PathItem has a list of pathPoints
    var points = item.pathPoints;

    var bounds = getBounds(points);
    var normalisedAnchorPoints = normalisePointsAtZero(points, bounds);

    exportAsPoints(normalisedAnchorPoints);    
  }
}

function exportAsPoints(points){
   var finalPoints = calculateFullPath(points);

   file.write("export default [");
      // iterate through each pathPoint of the item
      for (var j = 0; j < finalPoints.length; j++) {
        if(j !== 0){
           file.write(",\n");
        }

        //use json toString
      file.write("{x : " + finalPoints[j].position.x + 
          ", y : " + finalPoints[j].position.y + "}");


      }

      file.write("];");
}


//iterate over all path items points so we set coordinates to 0 for drawing
function getBounds(points){
  //add length check

  var xOffset = points[0].anchor[0];
  //for some reason y is negative so we have to make it positive
  //for correct coords
  var yOffset = -points[0].anchor[1];

  for(var i = 0; i < points.length; i++){
      xOffset = points[i].anchor[0] < xOffset ? points[i].anchor[0] : xOffset;
      yOffset = -points[i].anchor[1] < yOffset ? -points[i].anchor[1] : yOffset;
  }

  return {
    xOffset : xOffset,
    yOffset : yOffset
  }

}

//normalise points coordinates at (0, 0)
//Purpose is we can dynamically set height/width in our application
function normalisePointsAtZero(points, bounds){
    //reset point coords so bounds are from 0, 0
    var pArr = [];

    for(var i = 0; i < points.length; i++){
      pArr.push({
          pointType : points[i].pointType,
          position : {
            x : points[i].anchor[0] - bounds.xOffset, 
            y : -points[i].anchor[1] - bounds.yOffset
          },
          leftDirection : {
            x : points[i].leftDirection[0] - bounds.xOffset,
            y : -points[i].leftDirection[1] - bounds.yOffset
          },
          rightDirection : {
            x : points[i].rightDirection[0] - bounds.xOffset,
            y : -points[i].rightDirection[1] - bounds.yOffset
          }
        });   
    }

    var maxXY = findMaxXY(pArr);

    //ANOTHER loop for the normalisation
    for(var i = 0; i < pArr.length; i++){
        pArr[i].position.x /= maxXY.maxX;
        pArr[i].position.y /= maxXY.maxY;
        pArr[i].leftDirection.x /= maxXY.maxX;
        pArr[i].leftDirection.y /= maxXY.maxY;
        pArr[i].rightDirection.x /= maxXY.maxX;
        pArr[i].rightDirection.y /= maxXY.maxY;
    }

    //round numbers to 2dp
    for(var i = 0; i < pArr.length; i++){
      pArr[i].position.x  = parseFloat(pArr[i].position.x.toFixed(2)); 
      pArr[i].position.y  = parseFloat(pArr[i].position.y.toFixed(2)); 
      pArr[i].leftDirection.x  = parseFloat(pArr[i].leftDirection.x.toFixed(2)); 
      pArr[i].leftDirection.y  = parseFloat(pArr[i].leftDirection.y.toFixed(2)); 
      pArr[i].rightDirection.x  = parseFloat(pArr[i].rightDirection.x.toFixed(2)); 
      pArr[i].rightDirection.y  = parseFloat(pArr[i].rightDirection.y.toFixed(2)); 
    }

    return pArr;
}

function calculateFullPath(anchorPoints){
    var pathArray = [];

    for(var i = 0; i < anchorPoints.length - 1; i++){
      var b = calculateBezierPoints(anchorPoints[i].position, anchorPoints[i].rightDirection, anchorPoints[i+1].leftDirection, anchorPoints[i+1].position);
      pathArray = pathArray.concat(b);
    }

    return pathArray;
}

function calculateBezierPoints(pointStart, lDirection, rDirection, pointEnd){

    var arr = [];

    for(var t = 0; t <= 1; t+= 0.1){
      var x = (Math.pow(1 - t, 3) * pointStart.x) + (3 * Math.pow(1 - t, 2) * t * lDirection.x) + (3 * (1 - t) * Math.pow(t, 2) * rDirection.x) + (Math.pow(t, 3) * pointEnd.x);
      var y = (Math.pow(1 - t, 3) * pointStart.y) + (3 * Math.pow(1 - t, 2) * t * lDirection.y) + (3 * (1 - t) * Math.pow(t, 2) * rDirection.y) + (Math.pow(t, 3) * pointEnd.y);

      var p = {
        position :  {
          x : x,
          y : y,
          t : t
        }
      }

      arr.push(p);
    }



    return arr;
}

function findMaxXY(arr){
  var maxX = 0;
    var maxY = 0;
    //find maxX and Y for normalisation
    for(var i = 0; i < arr.length; i++){
        if(arr[i].position.x > maxX){
          maxX = arr[i].position.x;
        }
        if(arr[i].position.y > maxY){
          maxY = arr[i].position.y;
        }
    }
  return  {maxX : maxX, maxY : maxY}

}

/***OLD****/

function exportAsDrawingCommands(points){
  file.write("export default { \n draw : function(context){\n");
  file.write("\tcontext.moveTo(" + points[0].position.x + ", " + points[0].position.y +  ");\n");
      // iterate through each pathPoint of the item
      for (var j = 0; j < points.length - 1; j++) {
        
        file.write("\tcontext.bezierCurveTo(" + points[j].leftDirection.x + "," + points[j].leftDirection.y + "," +
                    points[j].rightDirection.x + "," + points[j].rightDirection.y + "," +
                    points[j+1].position.x + "," + points[j+1].position.y + ");\n");
       
      }
   
  file.write("\n}\n};");
  file.close();
}
