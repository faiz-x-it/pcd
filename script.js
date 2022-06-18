let input;
let img;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  input = createFileInput(handleFile);
  input.position(100, windowHeight-30);
	colorPicker = createColorPicker('#ffffff');
	colorPicker.position(50, windowHeight-30);
  colorPicker.size(50, 22); 
	fil = "";
	button = createButton('save');
	button.size(50, 22);  
	button.position(0, windowHeight-30); 
	button.mousePressed(take_snapshot);
}

function draw(){  
  background(255);
  if (img) {
    image(img, 0, 0,  windowWidth, windowHeight);
  }
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
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
function take_snapshot(){
    save('test.png');
}
