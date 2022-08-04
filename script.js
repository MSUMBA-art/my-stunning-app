// ADD ACTIVE CLASS ON LINK CLICK

const navUl = document.getElementById("nav-ul");
const navLi = document.getElementsByClassName("nav-li");

for (let index = 0; index < navLi.length; index++) {
    navLi[i].addEventListener("click", () => {
        const current = document.getElementById("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
    
}