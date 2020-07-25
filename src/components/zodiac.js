let main = document.querySelector('main')

class Zodiac {
    constructor(id, name){
        this.id = id
        this.name = name       
    }

    renderZodiacs(){
        const div = document.createElement('div')
            div.setAttribute("class", "divCard")
            div.setAttribute("data-id", this.id)
        const ul = document.createElement('ul')
            ul.setAttribute('id', this.id)
        const p = document.createElement("p")
            p.textContent = `${this.name}`
        const input = document.createElement("input")
            input.setAttribute("class", "innerInput")
            input.setAttribute("data-id", this.id)
        const button = document.createElement("button")
            let zodId = this.id
            button.setAttribute("data-id", this.id) // this.id is the card id
            // debugger
            button.innerText = "Add Behavior Here"
            button.onclick = function(e){ 
                e.preventDefault()       
                let post = e.target.nextElementSibling.value
                let comment = new Comment(post ,zodId) 
                    comment.addComments() 
                let input = e.target.nextElementSibling
                    input.value = " "       
            }
            div.appendChild(p)
            div.appendChild(button)
            div.appendChild(input)
            div.appendChild(ul) 
            div.setAttribute('class', 'card')
            div.setAttribute('data-id', this.id)
            main.append(div)
    }    
}