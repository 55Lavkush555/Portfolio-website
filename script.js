let dropdownOpen = false

document.querySelector(".hamburger").addEventListener("click", ()=> {
    let dropdown = document.querySelector(".dropdown");
    if (dropdownOpen == false){
        dropdown.innerHTML = `<a href="./">Home</a>
                <a href="blogs/">Blogs</a>
                <a href="works/">Work</a>
                <a href="contact/">Contact</a>`

        dropdownOpen = true
    }

    else {
        dropdown.innerHTML = ``
        dropdownOpen = false
    }
})

async function main() {
    let f = await fetch("./blogs/index.html")
    
    let html = await document.createElement("div")
    html.innerHTML = await f.text()

    let cards = html.querySelectorAll(".card")

    // console.log(cards[0].innerHTML)
    // console.log(cards[1].innerHTML)

    let post_card = await document.body.querySelectorAll(".post-card")

    for (let i = 0; i < post_card.length; i++) {
        const element = post_card[i];
        
        element.innerHTML = cards[i].innerHTML
    }
}

main()