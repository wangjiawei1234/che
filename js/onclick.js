var a = document.getElementById("left-b"),
    left = document.getElementById("left");

a.onMouseMove = function(){
	left.style.border = '10px,solid,rgb(255,87,26)';
	left.style.background = 'blue';
};

