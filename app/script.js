function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();
	  colorPicker = createColorPicker('#ffffff');
  colorPicker.position(0, 20);
	fil = "";
	button = createButton('snapshot');
  button.position(50/100*windowWidth, windowHeight);  button.mousePressed(take_snapshot);
}

function draw(){
    image(video, 0, 0, windowWidth, windowHeight);
	   tint(colorPicker.color());
	fil = document.getElementById("filter").value;
	if(fil==="THRESHOLD"){filter(THRESHOLD);}
	if(fil==="GRAY"){filter(GRAY);}
	if(fil==="OPAQUE"){filter(OPAQUE);}
	if(fil==="INVERT"){filter(INVERT);}
	if(fil==="POSTERIZE"){filter(POSTERIZE, 3);}
	if(fil==="DILATE"){filter(DILATE);}
	if(fil==="BLUR"){filter(BLUR);}
	if(fil==="ERODE"){filter(ERODE);}
}

function take_snapshot(){
    save('test.png');
}
