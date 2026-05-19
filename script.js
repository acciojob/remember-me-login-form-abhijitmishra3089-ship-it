const name=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("submit");
const check=document.getElementById("checkbox");
const existbtn=document.getElementById("existing");

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${name.value}`)
	if(check.checked){
		localStorage.setItem("username",name.value);
		localStorage.setItem("password",password.value);
		 existingBtn.style.display = "block";
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		 existingBtn.style.display = "none";
	}
});
existbtn.addEventListener('click',(e)=>{
	e.preventDefault();
	costr storeddata=localStorage.getItem("username")
	alert(`Logged in as ${storeddata});
})