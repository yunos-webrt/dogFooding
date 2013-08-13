//element id
function switchTab (tabBar) {
	var tabs = tabBar.parentElement.children;
	var bars = tabBar.children;
	for(var i=1; i<tabs.length; i++){
		if(bars[i-1]==event.target){
			tabs[i].style.display = 'block';
			bars[i-1].className='current';
		}else{
			tabs[i].style.display = '';
			bars[i-1].className='';
		}		
	}	
}

function changeCheckboxState(box){
	var classes = box.classList;
	if(classes.contains('on')){
		classes.remove('on');
	}else{
		classes.add('on');
	}
}
//return if the rating is changed
function setRatingScale(e){	//e: <ul></ul>
	if(event.target.tagName!='LI'){
		return false;
	}
	var children = e.children;
	e.scale = null; //children.indexOf(event.target);
	for(var i=0; i<children.length; i++){
		if(!e.scale)
			children[i].className='on';
		else
			children[i].removeAttribute('class');
		if(children[i]==event.target){
			e.scale = i+1;
		}
	}
	return true;
}