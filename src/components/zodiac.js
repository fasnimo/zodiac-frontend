let main = document.querySelector('main')

class Zodiac {
    constructor(id, name){
        this.id = id
        this.name = name       
    }
    // previous Function 
    renderZodiac(){
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
            let zodId = this.id // current instance method has a Zodiac id of whatever instance it is.
            button.setAttribute("data-id", this.id) // this.id is the card id
            // debugger
            button.innerText = "Add Behavior Here"
            button.onclick = 
                function(e){ 
                    e.preventDefault()       
                    debugger
                    let post = e.target.nextElementSibling.value
                    let id = null // not sure why but it works
                    debugger
                    let comment = new Comment(id, post ,zodId) 
                    debugger
                        comment.addComment() 
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

//revisit
// let main = document.querySelector('main')
// class Zodiac {
//     constructor(id, name){
//         this.id = id
//         this.name = name       
//     }
//     //should probably add a ul to this.
//     renderZodiac(){
//         main.innerHTML += 
//         `
//         <div class="card" data-id=${this.id}>
//             <p>${this.name}</p>
//             <button data-id=${this.id} onclick="Comment.addComment()">
//                 Add Comment Here
//             </button>
//             <input class="innerInput" data-id=${this.id}>
//             <ul id="${this.id}"></ul>
//         </div>
//         `
//         // debugger
//     }
// }