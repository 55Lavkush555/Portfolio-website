let dropdownOpen = false

document.querySelector(".hamburger").addEventListener("click", ()=> {
    let dropdown = document.querySelector(".dropdown");
    if (dropdownOpen == false){
        dropdown.innerHTML = `<a href="../">Home</a>
                <a href="../blogs">Blogs</a>
                <a href="../works">Work</a>
                <a href="./">Contact</a>`

        dropdownOpen = true
    }

    else {
        dropdown.innerHTML = ``
        dropdownOpen = false
    }
})

async function Submit() {
    let name = document.body.querySelector("#name").value
    let email = document.body.querySelector("#email").value
    let message = document.body.querySelector("#message").value
    

    let data = {
        name,
        email,
        message, 
    }

    let r = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data), headers: {
        'Content-Type': 'application/json'
      }})
}


document.body.querySelector("button").addEventListener("click", ()=> {
    Submit()
})