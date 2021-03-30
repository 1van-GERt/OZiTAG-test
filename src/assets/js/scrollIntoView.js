const link = document.querySelectorAll('a');

link.forEach(item=>{
	item.addEventListener('click', event =>{
		
	if( item.classList.contains('active-link')){
		clearClass()
	}	else{
		clearClass()
		item.classList.add('active-link');
	}	
	scrollitem()
});
})

function clearClass(){
	link.forEach(item=>{
		item.classList.remove('active-link');
	})
}

function scrollitem(){
	link.forEach(item=>{
		if(item.classList.contains('active-link')){
			item.scrollIntoView({block: "start"});
		}
	})
}