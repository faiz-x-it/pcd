function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight-30);
    video = createCapture(VIDEO);
    video.hide();
	colorPicker = createColorPicker('#ffffff');
	colorPicker.position(50, windowHeight-30);
	fil = "";
	button = createButton('save');
	button.size(50, 26);  
	button.position(0, windowHeight-30); 
	button.mousePressed(take_snapshot);
}

function draw(){
    image(video, 0, 0, windowWidth, windowHeight-30);
	   tint(colorPicker.color());
	fil = document.getElementById("filter").value;
	if(fil==="THRESHOLD"){filter(THRESHOLD);}
	if(fil==="GRAY"){filter(GRAY);}
	if(fil==="OPAQUE"){filter(OPAQUE);}
	if(fil==="INVERT"){filter(INVERT);}
	if(fil==="POSTERIZE"){filter(POSTERIZE, 3);}
	if(fil==="DILATE"){filter(DILATE);}
	if(fil==="BLUR"){filter(BLUR, 5);}
	if(fil==="ERODE"){filter(ERODE);}
}

function take_snapshot(){
    save('test.png');
}
