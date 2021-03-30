const navSwitch = document.querySelectorAll('.nav__switch');
const subnav = document.querySelectorAll('.subnav');
const body = document.body; 



navSwitch.forEach(item=>{
	item.addEventListener('click', event=>{
		let $this = event.currentTarget;	
		let childs = $this.parentNode.children;
		let div;
		for(const el of childs) { 
    		if (el.classList.contains('subnav')) {
    			div = el 
    		};
    	};
	creatClass(div, $this)
	})
})

function creatClass(div,$this){
	
	if(div.classList.contains('show-subnav')) {				
			clearClass();
	}	else{
			clearClass()
			$this.classList.add('btm-nav')
			div.classList.add('show-subnav');
	}
}

function clearClass(){
	subnav.forEach(item=>{
		item.classList.remove('show-subnav');
	})
	navSwitch.forEach(item=>{
		item.classList.remove('btm-nav');
	})
}
	
	