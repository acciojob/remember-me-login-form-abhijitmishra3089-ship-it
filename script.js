const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("submit");
const check = document.getElementById("checkbox");
const existbtn = document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existbtn.style.display = "inline-block";
} else {
    existbtn.style.display = "none";
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    alert(`Logged in as ${usernameInput.value}`);

    if (check.checked) {
        localStorage.setItem("username", usernameInput.value);
        localStorage.setItem("password", passwordInput.value);

        existbtn.style.display = "inline-block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existbtn.style.display = "none";
    }
});

existbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("username");
    alert(`Logged in as ${storedData}`);
});