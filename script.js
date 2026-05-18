const name=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("submit");
const check=document.getElementById("checkbox");
const existbtn=document.getElementById("existing");

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${name}`)
	if(check){
		localStorage.setItem("name",JSON.stringify(name));
		localStorage.setItem("password",JSON.stringify(password));
	}else{
		localStorage.removeItem("name");
		localStorage.removeItem("password");
	}
});
existbtn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${localStorage.getItem("name")`);
})