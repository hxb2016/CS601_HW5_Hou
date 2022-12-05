const button = document.getElementById("degree")
const content = document.getElementById("content")
const section = document.getElementsByTagName("section")[0]

button.addEventListener("click", () => {
    fetch("https://cs601-week5-xbh.glitch.me/degrees.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let degree_ps = content.children
            for (let i = 0; i < degree_ps.length; i++) {
                let cell = data.degrees[i].degree
                degree_ps[i].innerHTML = `<span>School Name: </span>${cell.school}; 
                <span>Major: </span>${cell.major}; 
                <span>Degree Type: </span>${cell.type}; 
                <span>Year Conferred: </span>${cell.year_conferred}; `
            }
            section.style.opacity = "1"
            section.style.transition = "opacity 1s"

            for (let i = 0; i < degree_ps.length; i++) {
                degree_ps[i].style.left = "0"
                degree_ps[i].style.transition = `left ${0.5 * i + 0.5}s`
            }
        })

})

// when mouse enter into submit button area
function enter(e) {
    e.style.background = "url('./images/back1.jpg') repeat center"
    e.style.color = "white"
}

// when mouse get out of submit button area
function leave(e) {
    e.style.background = ""
    e.style.color = "black"
}