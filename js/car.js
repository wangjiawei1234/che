/*轮播图*/
var pic = document.getElementById("pic");
var imgs = ['1.jpg','2.jpg','3.jpg'];
var i = 0;
function my(){
	pic.src = 'img/' + imgs[i];
	i++;
	if(i >= imgs.length){
		i = 0;
	}
}
var time = setInterval('my()' , 1000);
