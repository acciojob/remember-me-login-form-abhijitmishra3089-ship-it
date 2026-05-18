const name=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("submit");
const check=document.getElementById("checkbox");
const existbtn=document.getElementById("existing");

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${name.value}`)
	if(check.checked){
		localStorage.setItem("name",name.value);
		localStorage.setItem("password",password.value);
	}else{
		localStorage.removeItem("name");
		localStorage.removeItem("password");
	}
});
existbtn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${localStorage.getItem("name")`);
})