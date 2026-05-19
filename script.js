const name=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("submit");
const check=document.getElementById("checkbox");
const existbtn=document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
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
	const storeddata=localStorage.getItem("username")
	alert(`Logged in as ${storeddata}`);
});
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const submitBtn = document.getElementById("submit");
// const checkbox = document.getElementById("checkbox");
// const existingBtn = document.getElementById("existing");

// // Check localStorage on page load
// const savedUsername = localStorage.getItem("username");
// const savedPassword = localStorage.getItem("password");

// if (savedUsername && savedPassword) {
//     existingBtn.style.display = "block";
// } else {
//     existingBtn.style.display = "none";
// }

// // Submit button functionality
// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     alert(`Logged in as ${username.value}`);

//     if (checkbox.checked) {
//         // Save credentials
//         localStorage.setItem("username", username.value);
//         localStorage.setItem("password", password.value);

//         // Show existing user button
//         existingBtn.style.display = "block";
//     } else {
//         // Remove saved credentials
//         localStorage.removeItem("username");
//         localStorage.removeItem("password");

//         // Hide existing user button
//         existingBtn.style.display = "none";
//     }
// });

// // Existing user login
// existingBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const savedUser = localStorage.getItem("username");

//     alert(`Logged in as ${savedUser}`);
// });