function $(id){
	return typeof id === 'string' ? document.getElementById(id):id;
}

window.onload = function(){
	var titles = $("left-nav-container").getElementsByTagName('li');
	var sections = $("about-us-container").getElementsByTagName('section');
	if(titles.length != sections.length) return;

	for(var i = 0;i < titles.length;i++){
		titles[i].id = i;
		titles[i].onclick = function(){
			for(var j = 0;j < titles.length;j++){
				titles[j].className = '';
				sections[j].style.display = 'none';
			}
			this.className = "left-active";
			sections[this.id].style.display = 'block';
		}
	}
}
	

