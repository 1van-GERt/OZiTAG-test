const subnavSwitch = document.querySelectorAll('.subnav__switch');
const nestedSubnav = document.querySelectorAll('.nested__subnav');



subnavSwitch.forEach(item=>{
	item.addEventListener('click', event=>{
		let $this = event.currentTarget;	
		let childs = $this.parentNode.children;
		let div;
		for(const el of childs) { 
    		if (el.classList.contains('nested__subnav')) {
    			div = el 
    		};
    	};

	creatClass(div, $this)
	})
})

function creatClass(div,$this){

	if(div.classList.contains('show-nesed__subnav')) {				
			clearClass();
	}	else{
			clearClass()
			$this.classList.add('btm-nav')
			div.classList.add('show-nesed__subnav');
	}
}

function clearClass(){
	nestedSubnav.forEach(item=>{
		item.classList.remove('show-nesed__subnav');
	})
	subnavSwitch.forEach(item=>{
		item.classList.remove('btm-nav');
	})
}
		