const name=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("submit");
const check=document.getElementById("checkbox");
const existbtn=document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

        if (savedUsername===null && savedPassword===null) {
            existbtn.style.display = "inline-block";
        }

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	alert(`Logged in as ${name.value}`)
	if(check.checked){
		localStorage.setItem("username",name.value);
		localStorage.setItem("password",password.value);
		 existbtn.style.display = "inline-block";
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		 existbtn.style.display = "none";
	}
});
existbtn.addEventListener('click',(e)=>{
	e.preventDefault();
	const storeddata=localStorage.getItem("username");
	alert(`Logged in as ${storeddata}`);
});