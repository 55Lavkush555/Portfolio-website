let dropdownOpen = false

document.querySelector(".hamburger").addEventListener("click", ()=> {
    let dropdown = document.querySelector(".dropdown");
    if (dropdownOpen == false){
        dropdown.innerHTML = `<a href="../">Home</a>
                <a href="../blogs">Blogs</a>
                <a href="./">Work</a>
                <a href="../contact">Contact</a>`

        dropdownOpen = true
    }

    else {
        dropdown.innerHTML = ``
        dropdownOpen = false
    }
})